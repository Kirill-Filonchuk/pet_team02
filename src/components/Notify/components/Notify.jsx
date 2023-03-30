import Backdrop from 'components/UIKit/Backdrop';
import { useModal } from 'hooks/useModal';
import { useWindowSize } from 'hooks/useWindowSize';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { positionCalculation } from '../utils/positionCalculation';
import { Card, CloseButton, CloseIcon } from './Notify.styled';

const modalRoot = document.querySelector('#modal-root');

const Notify = ({ onClose, position, children, isOpen }) => {
  const { isMobile } = useWindowSize();
  const { onBackdropClick } = useModal(onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const frequentStyles = positionCalculation(position);

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Card freqProps={!isMobile && frequentStyles}>
        {children}
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Card>
    </Backdrop>,
    modalRoot
  );
};

export default Notify;
