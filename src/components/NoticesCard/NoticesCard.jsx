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
  Table,
  Td,
  Title,
  Tr,
} from './NoticesCard.styled';
import { useState } from 'react';
import { Button } from 'components/UIKit/Button/Button.styled';

const NoticesCard = ({
  id,
  img,
  label,
  title,
  breed,
  place,
  age,
  price,
  isMine,
  isFavorite,
}) => {
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  return (
    <Article>
      <ImageWrapper>
        <Image src={img} alt="title" />
      </ImageWrapper>

      <Meta>
        <Title>{title}</Title>
        <Table>
          <tbody>
            <Tr>
              <Td>Breed:</Td>
              <Td>{breed}</Td>
            </Tr>
            <Tr>
              <Td>Place:</Td>
              <Td>{place}</Td>
            </Tr>
            <Tr>
              <Td>Age:</Td>
              <Td>{age}</Td>
            </Tr>

            <Tr hasPrice={price} isPrice>
              <Td>Price:</Td>
              <Td>${price}</Td>
            </Tr>
          </tbody>
        </Table>

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
