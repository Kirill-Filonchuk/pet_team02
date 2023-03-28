// import { notifyError } from 'components/Helpers/Toastify';
import ShouldDelete from 'components/Notifications/ShouldDelete';
import Notify from 'components/Notify';
import OvalSpinner from 'components/UIKit/Spinners/OvalSpinner';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import { useDeleteNoticeMutation } from 'redux/notices/noticesApi';
import { NoticeCardButton } from './NoticesCard.styled';
import { useEffect } from 'react';
import { notifyDeletePetError } from 'components/Helpers/Toastify';

const NoticeDeleteButton = ({ id }) => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const { buttonRef, position } = useNotifyPosition();

  const [deleteNotice, { isLoading: isDeleting, error }] =
    useDeleteNoticeMutation();

  useEffect(() => {
    if (error) {
      console.log(error);
      notifyDeletePetError('Something went wrong! Cannot delete pet');
    }
  }, [error]);

  const onDeleteNotice = async () => {
    try {
      await deleteNotice(id);
    } catch (err) {
      console.log(err);
    }
  };

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
        Delete
        {isDeleting ? (
          <OvalSpinner color="#ffffff" secondaryColor="#FF6101" />
        ) : (
          <HiTrash size={18} />
        )}
      </NoticeCardButton>
      {isNotifyOpen && (
        <Notify
          position={position}
          onClose={() => {
            setIsNotifyOpen(false);
          }}
        >
          <ShouldDelete
            onClose={() => {
              setIsNotifyOpen(false);
            }}
            onDelete={onDeleteNotice}
          />
        </Notify>
      )}
    </>
  );
};

export default NoticeDeleteButton;
