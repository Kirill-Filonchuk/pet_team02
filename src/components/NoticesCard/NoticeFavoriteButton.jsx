import HeartIcon from './HeartIcon';
import { Favorite } from './NoticesCard.styled';

const NoticeFavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <Favorite onClick={onClick}>
      <HeartIcon isFavorite={isFavorite} />
    </Favorite>
  );
};

export default NoticeFavoriteButton;
