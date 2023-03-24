import ShouldLogin from 'components/Notifications/ShouldLogin';
import Notify from 'components/Notify';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import { useState } from 'react';
import HeartIcon from './HeartIcon';
import { Favorite } from './NoticesCard.styled';

const NoticeFavoriteButton = ({ isFavorite, onClick, isLoggedIn }) => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const { buttonRef, position } = useNotifyPosition();

  const onClickHandler = () => {
    isLoggedIn ? onClick() : setIsNotifyOpen(true);
  };

  return (
    <>
      <Favorite ref={buttonRef} onClick={onClickHandler}>
        <HeartIcon isFavorite={isFavorite} />
      </Favorite>

      {isNotifyOpen && (
        <Notify
          position={position}
          onClose={() => {
            setIsNotifyOpen(false);
          }}
        >
          <ShouldLogin />
        </Notify>
      )}
    </>
  );
};

export default NoticeFavoriteButton;
