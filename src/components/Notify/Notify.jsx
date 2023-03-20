import Backdrop from 'components/UIKit/Backdrop';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Card } from './Notify.styled';

const modalRoot = document.querySelector('#modal-root');

const Notify = ({ onClose, position, children }) => {
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.onscroll = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener('keydown', onEscClose);

    return () => {
      window.removeEventListener('keydown', onEscClose);
      window.onscroll = function () {};
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Card x={position.x} y={position.y}>
        <p>{JSON.stringify(position)}</p>

        {children}
      </Card>
    </Backdrop>,
    modalRoot
  );
};

export default Notify;
