import PropTypes from 'prop-types';
import NoticeDeleteButton from './NoticeDeleteButton';
import OptionsTable from './OptionsTable';
import NoticeFavoriteButton from './NoticeFavoriteButton';
import ModalNotice from '../ModalNotice';
import {
  Article,
  BtnWrapper,
  Image,
  ImageWrapper,
  Label,
  Meta,
  NoticeCardButton,
  Title,
} from './NoticesCard.styled';
import { useEffect, useState } from 'react';
import { trimText } from 'utils/trimText';
import defaultImage from 'assets/images/pets-default-image.jpg';
import { useUpdateNoticeFavoriteStatusMutation } from 'redux/notices/noticesApi';
import { refreshUser } from 'redux/auth/operations';

const NO_INFO = '-';

const NoticesCard = ({
  _id,
  petAvatarURL,
  label = '',
  title,
  breed = NO_INFO,
  place = NO_INFO,
  age = NO_INFO,
  price = '',
  isMine = false,
  isFavorite = false,
  isLoggedIn,
  onFavoriteClick,
}) => {
  // const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  const [openModal, setOpenModal] = useState(false);

  // const [updateFavoriteStatus, { isLoading }] =
  //   useUpdateNoticeFavoriteStatusMutation();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  // const onFavoriteClickHandler = async () => {
  //   //here should be code for update favorite/ After resolve positive response
  //   // console.log(`card id ${_id} favorite: ${isFavoriteCard}`);
  //   // setIsFavoriteCard(!isFavoriteCard);
  //   try {
  //     const response = await updateFavoriteStatus(_id);
  //     if (response.data.result) {
  //       setIsFavoriteCard(!isFavoriteCard);
  //       // refreshUser();
  //     }

  //     // setIsFavoriteCard()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Article>
        <ImageWrapper>
          <Image src={petAvatarURL || defaultImage} alt="title" />
        </ImageWrapper>

        <Meta>
          <Title>{trimText(title, 13)}</Title>
          <OptionsTable
            options={[
              { key: 'Breed', value: trimText(breed, 13) },
              { key: 'Place', value: trimText(place, 13) },
              { key: 'Age', value: age },
              { key: 'Price', value: price, isPrice: true },
            ]}
          />

          <BtnWrapper>
            <NoticeCardButton
              type="button"
              onClick={() => setOpenModal(!openModal)}
            >
              Learn more
            </NoticeCardButton>

            {isMine && <NoticeDeleteButton id={_id} />}
          </BtnWrapper>
        </Meta>

        <Label>{label}</Label>

        <NoticeFavoriteButton
          isFavorite={isFavorite}
          // onClick={onFavoriteClickHandler}
          onClick={() => {
            onFavoriteClick(_id);
          }}
          isLoggedIn={isLoggedIn}
        />
      </Article>

      {openModal && (
        <ModalNotice
          onClose={() => setOpenModal(false)}
          isOpen={openModal}
          id={_id}
        />
      )}
    </>
  );
};

export default NoticesCard;

NoticesCard.propTypes = {
  _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  petAvatarURL: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string,
  place: PropTypes.string,
  age: PropTypes.string,
  price: PropTypes.string,
  isMine: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isLoggedIn: PropTypes.bool.isRequired,
};
