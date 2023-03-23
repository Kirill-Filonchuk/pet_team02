import Backdrop from 'components/Notify/components/Backdrop';
import { useModal } from 'hooks/useModal';
import { useWindowSize } from 'hooks/useWindowSize';
import { createPortal } from 'react-dom';
import { positionCalculation } from '../utils/positionCalculation';
import { Card, CloseButton, CloseIcon } from './Notify.styled';

const modalRoot = document.querySelector('#modal-root');

const Notify = ({ onClose, position, children }) => {
  const { isMobile } = useWindowSize();
  const { onBackdropClick } = useModal(onClose);

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
