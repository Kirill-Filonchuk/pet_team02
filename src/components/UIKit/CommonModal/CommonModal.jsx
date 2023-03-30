import { useModal } from 'hooks/useModal';
import Backdrop from '../Backdrop';
import { CloseButton, ModalContainer } from './CommonModal.styled';
import { IoMdClose } from 'react-icons/io';
import { useRef, useState } from 'react';
import { useViewportResize } from 'hooks/useViewportResize';
import { useEffect } from 'react';

const CommonModal = ({ children, onClose, isOpen }) => {
  const { onBackdropClick } = useModal(onClose);
  const [isModalHuge, setIsModalHuge] = useState(false);

  const containerRef = useRef();
  const viewportSize = useViewportResize();

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
