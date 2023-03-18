import { HiTrash } from 'react-icons/hi';
import {
  Article,
  BtnWrapper,
  Button,
  Favorite,
  Image,
  ImageWrapper,
  Label,
  Meta,
  Table,
  Td,
  Title,
  Tr,
} from './NoticesCard.styled';

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
          <Button type="button">Learn more</Button>
          {isMine && (
            <Button type="button">
              Delete <HiTrash />
            </Button>
          )}
        </BtnWrapper>
      </Meta>

      <Label>{label}</Label>
      <Favorite>heart</Favorite>
    </Article>
  );
};

export default NoticesCard;
