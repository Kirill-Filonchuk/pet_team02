import CommonModal from 'components/UIKit/CommonModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AddPetWrapper,
  BackButton,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  CommentDecription,
  CommentsField,
  CommentWrapper,
  Description,
  FieldsFirstStep,
  FieldsSecondStep,
  Input,
  Label,
  NextButton,
  SexItem,
  SexLabel,
  SexList,
  SexRadio,
  SexTitle,
  SexWrapper,
  Title,
  ToolBar,
  UploadDescription,
  UploadIcon,
  UploadIconWrapper,
  UploadInput,
  UploadLabel,
  UploadWrapper,
} from './AddNoticeModal.styled';

const modalRoot = document.querySelector('#modal-root');

const AddNoticeModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  //   const onAddPetSubmit = e => {
  //     e.preventDefault();
  //     // console.log(e.target.elements);
  //   };

  return createPortal(
    <>
      <CommonModal onClose={onClose}>
        <AddPetWrapper>
          {/* STEP -1 */}
          {step === 1 && (
            <>
              <Title>Add pet</Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur
              </Description>
              <CategoryList>
                <CategoryItem>
                  <CategoryRadio
                    id="lost_found"
                    type="radio"
                    name="category"
                    className="visually-hidden"
                    value="lost-found"
                    onClick={e => {
                      console.log(e.target.value);
                    }}
                  />
                  <CategoryLabel htmlFor="lost_found">lost/found</CategoryLabel>
                </CategoryItem>

                <CategoryItem>
                  <CategoryRadio
                    id="in_good_hands"
                    type="radio"
                    name="category"
                    value="in-good-hands"
                    onClick={e => {
                      console.log(e.target.value);
                    }}
                    className="visually-hidden"
                  />
                  <CategoryLabel htmlFor="in_good_hands">
                    in good hands
                  </CategoryLabel>
                </CategoryItem>

                <CategoryItem>
                  <CategoryRadio
                    id="sell_"
                    type="radio"
                    name="category"
                    value="sell"
                    onClick={e => {
                      console.log(e.target.value);
                    }}
                    className="visually-hidden"
                  />
                  <CategoryLabel htmlFor="sell_">sell</CategoryLabel>
                </CategoryItem>
              </CategoryList>
              <FieldsFirstStep>
                <Label>
                  Tittle of ad
                  <Input type="text" placeholder="Type name" name="title" />
                </Label>

                <Label>
                  Name pet
                  <Input type="text" placeholder="Type name pet" name="name" />
                </Label>

                <Label>
                  Date of birth
                  <Input
                    type="text"
                    placeholder="Type date of birth"
                    name="birthday"
                  />
                </Label>

                <Label>
                  Breed
                  <Input type="text" placeholder="Type breed" name="breed" />
                </Label>
              </FieldsFirstStep>
              <ToolBar>
                <NextButton
                  type="button"
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Next
                </NextButton>
                <BackButton
                  type="button"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Cancel
                </BackButton>
              </ToolBar>
            </>
          )}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* STEP -2 */}
          {step === 2 && (
            <>
              <Title>Add pet</Title>

              <SexWrapper>
                <SexTitle>The sex:</SexTitle>
                <SexList>
                  <SexItem>
                    <SexRadio
                      id="sex_male"
                      type="radio"
                      name="sex"
                      value="male"
                      className="visually-hidden"
                    />
                    <SexLabel htmlFor="sex_male" isMale>
                      Male
                    </SexLabel>
                  </SexItem>
                  <SexItem>
                    <SexRadio
                      id="sex_female"
                      type="radio"
                      name="sex"
                      value="female"
                      className="visually-hidden"
                    />
                    <SexLabel htmlFor="sex_female">Female</SexLabel>
                  </SexItem>
                </SexList>
              </SexWrapper>

              <FieldsSecondStep>
                <Label>
                  Location:
                  <Input type="text" placeholder="Type location" name="place" />
                </Label>

                <Label>
                  Price:
                  <Input type="text" placeholder="Type price" name="price" />
                </Label>
              </FieldsSecondStep>

              <UploadWrapper>
                <UploadDescription>Load the pet’s image:</UploadDescription>
                <UploadLabel>
                  <UploadIconWrapper>
                    <UploadIcon />
                  </UploadIconWrapper>
                  <UploadInput
                    type="file"
                    name="avatar"
                    className="visually-hidden"
                  />
                </UploadLabel>
              </UploadWrapper>

              <CommentWrapper>
                <CommentDecription>Comments</CommentDecription>
                <CommentsField
                  placeholder="Type comment"
                  name="comments"
                ></CommentsField>
              </CommentWrapper>

              <ToolBar>
                <NextButton type="submit" form="add_pet_form">
                  Done
                </NextButton>
                <BackButton
                  type="button"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Back
                </BackButton>
              </ToolBar>
            </>
          )}
        </AddPetWrapper>
      </CommonModal>
    </>,
    modalRoot
  );
};

export default AddNoticeModal;
