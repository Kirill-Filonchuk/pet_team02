// import Modal from 'components/Modal';
import CommonModal from 'components/UIKit/CommonModal';

// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  AddPetWrapper,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  Description,
  Form,
  FormWrapper,
  Input,
  Label,
  ModalButton,
  Title,
  ToolBar,
} from './ModalAddPet.styled';
// import styles from './ModalAddPet.module.css';
// import { RiCloseLine } from 'react-icons/ri';
// import ContentAddPet from './ContentAddPet/ContentAddPet.jsx';
// import styled from 'styled-components';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAddPet({ onClose }) {
  // useEffect(() => {
  //   console.log('Mount');
  //   window.addEventListener('keydown', hendleKeyDown);
  //   return () => {
  //     console.log('unmount');
  //     window.removeEventListener('keydown', hendleKeyDown);
  //   };
  // });

  // const hendleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     console.log('Turn On Escape');
  //     onClose();
  //   }
  // };

  // const hendleClickBackdrope = e => {
  //   if (e.target === e.currentTarget) {
  //     console.log('click backgrope');
  //     onClose();
  //   }
  // };

  return createPortal(
    <>
      {/* <div className={styles.darkBG} onClick={hendleClickBackdrope} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeder}>
            <h2 className={styles.heading}>Add pet</h2>
            <p className={styles.titleForm}>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <ContentAddPet setShowModal={onClose} />
        </div>
      </div> */}
      <CommonModal onClose={onClose}>
        <AddPetWrapper>
          <Title>Add pet</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </Description>

          <CategoryList>
            <CategoryItem>
              <CategoryLabel htmlFor="lost_found">lost/found</CategoryLabel>
              <CategoryRadio id="lost_found" type="radio" name="category" />
            </CategoryItem>

            <CategoryItem>
              <CategoryLabel htmlFor="in_good_hands">
                in good hands
              </CategoryLabel>
              <CategoryRadio id="in_good_hands" type="radio" name="category" />
            </CategoryItem>

            <CategoryItem>
              <CategoryLabel htmlFor="sell_">sell</CategoryLabel>
              <CategoryRadio id="sell_" type="radio" name="category" />
            </CategoryItem>
          </CategoryList>

          <Form>
            <Label>
              Tittle of ad
              <Input type="text" />
            </Label>

            <Label>
              Name pet
              <Input type="text" />
            </Label>

            <Label>
              Date of birth
              <Input type="text" />
            </Label>

            <Label>
              Breed
              <Input type="text" />
            </Label>
          </Form>

          <ToolBar>
            <ModalButton type="button">Cancel</ModalButton>
            <ModalButton type="button">Next</ModalButton>
          </ToolBar>
        </AddPetWrapper>
      </CommonModal>
    </>,
    modalRoot
  );
}
