import { useEffect } from 'react';
import { useSpring, animated, useTransition } from '@react-spring/web';
import { Overlay, ModalWrapper } from './Modal.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code !== 'Escape') {
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onClose]);

  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
      duration: 350,
    },
  });

  const springs = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: 'translate(-50%, -50%)',
    config: {
      duration: 350,
    },
  });

  return modalTransition(
    (styles, isOpen) =>
      isOpen &&
      createPortal(
        <Overlay as={animated.div} style={styles} onClick={onClose}>
          <ModalWrapper
            as={animated.div}
            style={springs}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </ModalWrapper>
        </Overlay>,
        modalRoot
      )
  );
};

export default Modal;
