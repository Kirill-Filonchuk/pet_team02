import PropTypes from 'prop-types';
import HeartIcon from './HeartIcon';
import { HiTrash } from 'react-icons/hi';
import {
  Article,
  BtnWrapper,
  Favorite,
  Image,
  ImageWrapper,
  Label,
  Meta,
  NoticeCardButton,
  Title,
} from './NoticesCard.styled';
import { useState } from 'react';
import OptionsTable from './OptionsTable';

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
}) => {
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  return (
    <Article>
      <ImageWrapper>
        <Image src={img} alt="title" />
      </ImageWrapper>

      <Meta>
        <Title>{title}</Title>
        <OptionsTable
          options={[
            { key: 'Breed', value: breed },
            { key: 'Place', value: place },
            { key: 'Age', value: age },
            { key: 'Price', value: price, isPrice: true },
          ]}
        />

        <BtnWrapper>
          <NoticeCardButton type="button">Learn more</NoticeCardButton>
          {isMine && (
            <NoticeCardButton type="button" isDelete>
              Delete <HiTrash size={18} />
            </NoticeCardButton>
          )}
        </BtnWrapper>
      </Meta>

      <Label>{label}</Label>

      <Favorite
        onClick={() => {
          setIsFavoriteCard(!isFavoriteCard);
        }}
      >
        <HeartIcon isFavorite={isFavoriteCard} />
      </Favorite>
    </Article>
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
};
