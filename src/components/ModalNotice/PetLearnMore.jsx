import { toast } from 'react-toastify';

import {
  useGetNoticeQuery,
  useUpdateNoticeFavoriteStatusMutation,
} from 'redux/notices/noticesApi';
import useAuth from 'hooks/useAuth/useAuth';

import {
  Wrapper,
  ModalNoticeCard,
  PositionWrapper,
  PetImage,
  Mark,
  PetTitle,
  DescriptionWrapper,
  DescriptionContainer,
  DescriptionContainerEnd,
  PetKey,
  Value,
  LinkWrapper,
  PetOwnerContacts,
  PetCommentTitle,
  PetComment,
  BtnWrapper,
  ContactBtn,
  ContactBtnLink,
  ToFavoriteBtn,
  HeartIconForBtn,
} from './PetLearnMore.styled';

import { EscButton } from 'components/UIKit/EscButton/EscButton.styled';
import { RxCross1 } from 'react-icons/rx';
import defaultImage from '../../assets/images/pets-default-image.jpg';
import Spinner from '../Helpers/Spinner';

const PetLearnMore = ({ onClose, id, isFavorite }) => {
  const { isLoggedIn } = useAuth();

  const [updateFavorite] = useUpdateNoticeFavoriteStatusMutation();

  const { data, isLoading, isSuccess } = useGetNoticeQuery(id);
  if (!data) return;
  const { result: onePet } = data;

  const {
    title,
    petAvatarURL = defaultImage,
    category,
    name,
    birthday,
    breed,
    place,
    sex,
    email,
    phone,
    price,
    comments,
  } = onePet;

  const phoneNumber = `tel:${phone}`;
  const emailAddress = `mailto:${email}`;
  const isPhone = true;

  const showPrice = category === 'sell' ? true : false;

  const hadleFavoriteBtnClick = async id => {
    if (isLoggedIn) {
      try {
        await updateFavorite(id).unwrap();
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('Please log in to use this functionality');
    }
  };

  const hadleContactBtnClick = () => {
    if (phone === null) {
      toast.error('Please use the email for contact');
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && (
        <Wrapper>
          <EscButton type="button" onClick={onClose}>
            <RxCross1 />
          </EscButton>
          <ModalNoticeCard>
            <PositionWrapper>
              <Mark>{category}</Mark>
              <PetImage src={petAvatarURL || defaultImage} alt={title} />

              <DescriptionWrapper>
                <PetTitle>{title}</PetTitle>

                <DescriptionContainer>
                  <PetKey>Name:</PetKey>
                  <Value>{name}</Value>
                </DescriptionContainer>

                <DescriptionContainer>
                  <PetKey>Birthday:</PetKey>
                  <Value>{birthday}</Value>
                </DescriptionContainer>

                <DescriptionContainer>
                  <PetKey>Breed:</PetKey>
                  <Value>{breed}</Value>
                </DescriptionContainer>

                <DescriptionContainer>
                  <PetKey>Location:</PetKey>
                  <Value>{place}</Value>
                </DescriptionContainer>

                <DescriptionContainer>
                  <PetKey>The sex:</PetKey>
                  <Value>{sex}</Value>
                </DescriptionContainer>

                <DescriptionContainer>
                  <PetKey>Email:</PetKey>
                  <LinkWrapper>
                    <PetOwnerContacts href={emailAddress}>
                      {email}
                    </PetOwnerContacts>
                  </LinkWrapper>
                </DescriptionContainer>
                {showPrice ? (
                  <>
                    <DescriptionContainer>
                      <PetKey>Phone:</PetKey>
                      <LinkWrapper isPhone={isPhone}>
                        <PetOwnerContacts href={phoneNumber}>
                          {phone}
                        </PetOwnerContacts>
                      </LinkWrapper>
                    </DescriptionContainer>
                    <DescriptionContainerEnd>
                      <PetKey>Price:</PetKey>
                      <Value>{price}</Value>
                    </DescriptionContainerEnd>
                  </>
                ) : (
                  <DescriptionContainerEnd>
                    <PetKey>Phone:</PetKey>
                    <LinkWrapper isPhone={isPhone}>
                      <PetOwnerContacts href={phoneNumber}>
                        {phone}
                      </PetOwnerContacts>
                    </LinkWrapper>
                  </DescriptionContainerEnd>
                )}
              </DescriptionWrapper>
            </PositionWrapper>

            <PetComment>
              <PetCommentTitle>Coments:</PetCommentTitle>
              {comments}
            </PetComment>

            <BtnWrapper>
              {phone === null ? (
                <ContactBtn onClick={hadleContactBtnClick}>Contact</ContactBtn>
              ) : (
                <ContactBtnLink to={phoneNumber}>Contact</ContactBtnLink>
              )}

              <ToFavoriteBtn
                onClick={() => hadleFavoriteBtnClick(id)}
                isFavorite={isFavorite}
              >
                {isFavorite ? 'Added to ' : 'Add to'}
                <HeartIconForBtn />
              </ToFavoriteBtn>
            </BtnWrapper>
          </ModalNoticeCard>
        </Wrapper>
      )}
    </>
  );
};

export default PetLearnMore;
