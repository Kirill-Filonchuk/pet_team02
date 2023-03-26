import { useModal } from 'hooks/useModal';
import Backdrop from '../Backdrop';
import { CloseButton, ModalContainer } from './CommonModal.styled';
import { IoMdClose } from 'react-icons/io';
import { useRef, useState } from 'react';
import { useViewportResize } from 'hooks/useViewportResize';
import { useEffect } from 'react';

const CommonModal = ({ children, onClose }) => {
  const { onBackdropClick } = useModal(onClose);
  const [isModalHuge, setIsModalHuge] = useState(false);

  const containerRef = useRef();
  const viewportSize = useViewportResize();

  useEffect(() => {
    const { height: containerHeight } =
      containerRef.current.getBoundingClientRect();
    setIsModalHuge(containerHeight > viewportSize.height);
  }, [viewportSize]);

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalContainer ref={containerRef} isModalHuge={isModalHuge}>
        {children}
        <CloseButton
          onClick={() => {
            onClose();
          }}
        >
          <IoMdClose size={20} />
        </CloseButton>
      </ModalContainer>
    </Backdrop>
  );
};

export default CommonModal;
