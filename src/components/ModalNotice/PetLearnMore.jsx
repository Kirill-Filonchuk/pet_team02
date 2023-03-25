import { useState } from 'react';

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
  ToFavoriteBtn,
  HeartIconForBtn,
} from './PetLearnMore.styled';

// import OptionsTable from 'components/NoticesCard/OptionsTable';
import { EscButton } from 'components/UIKit/EscButton/EscButton.styled';
import { RxCross1 } from 'react-icons/rx';

import { useGetNoticeQuery } from 'redux/notices/noticesApi';
import defaultImage from 'assets/images/pets-default-image.jpg';

const PetLearnMore = ({ onClose, id }) => {
  // change to the correct funtion
  const [isFavoritePet, setIsFavoritePet] = useState(false);

  const { data } = useGetNoticeQuery(id);
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

  //   const tel = !phone ? '-' : phone;
  const phoneNumber = `tel:${phone}`;
  const emailAddress = `mailto:${email}`;

  const showPrice = category === 'sell' ? true : false;

  return (
    <Wrapper>
      <EscButton type="button" onClick={onClose}>
        <RxCross1 />
      </EscButton>
      <ModalNoticeCard>
        <PositionWrapper>
          <Mark>{category}</Mark>
          <PetImage src={petAvatarURL} alt={title} />

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
                <PetOwnerContacts href={emailAddress}>{email}</PetOwnerContacts>
              </LinkWrapper>
            </DescriptionContainer>
            {showPrice ? (
              <>
                <DescriptionContainer>
                  <PetKey>Phone:</PetKey>
                  <PetOwnerContacts href={phoneNumber}>
                    {phone}
                  </PetOwnerContacts>
                </DescriptionContainer>
                <DescriptionContainerEnd>
                  <PetKey>Price:</PetKey>
                  <Value>{price}</Value>
                </DescriptionContainerEnd>
              </>
            ) : (
              <DescriptionContainerEnd>
                <PetKey>Phone:</PetKey>
                <PetOwnerContacts href={phoneNumber}>{phone}</PetOwnerContacts>
              </DescriptionContainerEnd>
            )}
          </DescriptionWrapper>
        </PositionWrapper>

        {/* <OptionsTable
          options={[
            { key: 'Name', value: name },
            { key: 'Birthday', value: birthday },
            { key: 'Breed', value: breed },
            { key: 'Location', value: place },
            { key: 'The sex', value: sex },
            { key: 'Email', value: email },
            { key: 'Phone', value: tel },
            { key: 'Price', value: price, isPrice: true },
          ]}
        /> */}
        <PetComment>
          <PetCommentTitle>Coments:</PetCommentTitle>
          {comments}
        </PetComment>

        <BtnWrapper>
          <ContactBtn to={phoneNumber}>Contact</ContactBtn>

          <ToFavoriteBtn
            onClick={() => setIsFavoritePet(!isFavoritePet)}
            isFavorite={isFavoritePet}
          >
            {isFavoritePet ? 'Added to ' : 'Add to'}
            <HeartIconForBtn favorite={isFavoritePet} />
          </ToFavoriteBtn>
        </BtnWrapper>
      </ModalNoticeCard>
    </Wrapper>
  );
};

export default PetLearnMore;
