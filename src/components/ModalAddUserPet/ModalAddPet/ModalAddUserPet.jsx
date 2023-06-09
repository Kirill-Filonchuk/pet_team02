import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated, useTransition } from '@react-spring/web';

import { Overlay, ModalWrapper } from './ModalAddUserPet.styled';

import { EscButton } from 'components/UIKit/EscButton/EscButton.styled';
import { RxCross1 } from 'react-icons/rx';
import AddUserPetForm from '../AddUserPetForm';

const modalRoot = document.querySelector('#modal-root');

const ModalAddUserPet = ({ isOpen, onClose, id }) => {
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
            <EscButton type="button" onClick={onClose}>
              <RxCross1 />
            </EscButton>
            <AddUserPetForm onClose={onClose}></AddUserPetForm>
          </ModalWrapper>
        </Overlay>,
        modalRoot
      )
  );
};

export default ModalAddUserPet;
