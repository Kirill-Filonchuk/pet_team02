// import { notifyError } from 'components/Helpers/Toastify';
import ShouldDelete from 'components/Notifications/ShouldDelete';
import Notify from 'components/Notify';
import OvalSpinner from 'components/UIKit/Spinners/OvalSpinner';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import {
  DeleteNotificationWrapper,
  NoticeCardButton,
} from './NoticesCard.styled';
import { useEffect } from 'react';
import { notifyDeletePetError } from 'components/Helpers/Toastify';
import CommonModal from 'components/UIKit/CommonModal';

const NoticeDeleteButton = ({
  id,
  onDeleteNotice,
  isDeleting,
  deletingError,
}) => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const { buttonRef, position } = useNotifyPosition();

  useEffect(() => {
    if (deletingError) {
      console.log(deletingError);
      notifyDeletePetError('Something went wrong! Cannot delete pet');
    }
  }, [deletingError]);

  return (
    <>
      <NoticeCardButton
        ref={buttonRef}
        type="button"
        isDelete
        onClick={() => {
          setIsNotifyOpen(true);
        }}
        // isDeleting={isDeleting}
        disabled={isDeleting}
      >
        Delete
        {isDeleting ? (
          <OvalSpinner color="#ffffff" secondaryColor="#FF6101" />
        ) : (
          <HiTrash size={18} />
        )}
      </NoticeCardButton>
      {/* {isNotifyOpen && (
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
            onDelete={() => {
              onDeleteNotice(id);
            }}
          />
        </Notify>
      )} */}
      {isNotifyOpen && (
        <CommonModal
          onClose={() => {
            setIsNotifyOpen(false);
          }}
          isOpen={isNotifyOpen}
        >
          <DeleteNotificationWrapper>
            <ShouldDelete
              onClose={() => {
                setIsNotifyOpen(false);
              }}
              onDelete={() => {
                onDeleteNotice(id);
              }}
            />
          </DeleteNotificationWrapper>
        </CommonModal>
      )}
    </>
  );
};

export default NoticeDeleteButton;
