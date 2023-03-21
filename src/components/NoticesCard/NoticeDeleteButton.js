import Notify from 'components/Notify';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import { NoticeCardButton } from './NoticesCard.styled';

const NoticeDeleteButton = ({ id }) => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const { buttonRef, position } = useNotifyPosition();

  return (
    <>
      <NoticeCardButton
        ref={buttonRef}
        type="button"
        isDelete
        onClick={() => {
          setIsNotifyOpen(true);
        }}
      >
        Delete <HiTrash size={18} />
      </NoticeCardButton>

      {isNotifyOpen && (
        <Notify
          position={position}
          onClose={() => {
            setIsNotifyOpen(false);
          }}
        >
          <p>Are you sure?</p>
        </Notify>
      )}
    </>
  );
};

export default NoticeDeleteButton;
