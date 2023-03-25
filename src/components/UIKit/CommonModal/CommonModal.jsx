import { useModal } from 'hooks/useModal';
import Backdrop from '../Backdrop';
import { CloseButton, ModalContainer } from './CommonModal.styled';
import { IoMdClose } from 'react-icons/io';

const CommonModal = ({ children, onClose }) => {
  const { onBackdropClick } = useModal(onClose);

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalContainer>
        {children}
        <CloseButton>
          <IoMdClose size={20} />
        </CloseButton>
      </ModalContainer>
    </Backdrop>
  );
};

export default CommonModal;
