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
import { trimText } from 'utils/trimText';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import Notify from 'components/Notify';
import NoticeDeleteButton from './NoticeDeleteButton';

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

            {isMine && <NoticeDeleteButton />}
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
};
