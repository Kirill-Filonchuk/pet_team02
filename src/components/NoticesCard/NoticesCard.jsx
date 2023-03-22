import PropTypes from 'prop-types';
import NoticeDeleteButton from './NoticeDeleteButton';
import OptionsTable from './OptionsTable';
import NoticeFavoriteButton from './NoticeFavoriteButton';
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
import { useState } from 'react';
import { trimText } from 'utils/trimText';
import { useEffect } from 'react';
import { useNotifyPosition } from 'hooks/useNotifyPosition';

const NoticesCard = ({
  id,
  img,
  label,
  title,
  breed,
  place,
  age,
  price,
  isMine = false,
  isFavorite = false,
  isLoggedIn,
}) => {
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  // useEffect(() => {
  //   console.log(`card id ${id} favorite: ${isFavoriteCard}`);
  //   //here should be code for update favorite
  // }, [isFavoriteCard, id]);

  const onFavoriteClickHandler = () => {
    //here should be code for update favorite/ After resolve positive response
    console.log(`card id ${id} favorite: ${isFavoriteCard}`);
    setIsFavoriteCard(!isFavoriteCard);
  };

  return (
    <>
      <Article>
        <ImageWrapper>
          <Image src={img} alt="title" />
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
            <NoticeCardButton type="button">Learn more</NoticeCardButton>

            {isMine && <NoticeDeleteButton id={id} />}
          </BtnWrapper>
        </Meta>

        <Label>{label}</Label>

        <NoticeFavoriteButton
          isFavorite={isFavoriteCard}
          onClick={onFavoriteClickHandler}
          isLoggedIn={isLoggedIn}
        />
        {/* <Favorite
          onClick={() => {
            setIsFavoriteCard(!isFavoriteCard);
          }}
        >
          <HeartIcon isFavorite={isFavoriteCard} />
        </Favorite> */}
      </Article>
    </>
  );
};

export default NoticesCard;

NoticesCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  price: PropTypes.string,
  isMine: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isLoggedIn: PropTypes.bool.isRequired,
};
