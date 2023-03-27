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
  StyledForm,
  Title,
  ToolBar,
  UploadDescription,
  UploadIcon,
  UploadIconWrapper,
  UploadInput,
  UploadLabel,
  UploadWrapper,
} from './AddNoticeModal.styled';
import { Formik, Form } from 'formik';
import { useStorage } from 'hooks/useStorage';
import { useEffect } from 'react';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';

const modalRoot = document.querySelector('#modal-root');

const CATEGORIES = {
  SELL: 'sell',
  IN_GOOD_HANDS: 'in-good-hands',
  LOST_FOUND: 'lost-found',
};

const firstStepInitialValues = {
  category: '',
  title: '',
  name: '',
  birthday: '',
  breed: '',
};

const secondStepInitialValues = {
  sex: '',
  place: '',
  price: '',
  comments: '',
};

const AddNoticeModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [addPet] = useAddNoticeMutation();

  const { getFromStorage, updateStorage, clearStorage } = useStorage(
    'add-notice-form-fields'
  );
  const [step, setStep] = useState(1);
  const [petAvatarURL, setPetAvatarURL] = useState();
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log(isSubmitted);
  // const [price, setPrice] = useState('');
  //   const [avatar, setAvatar] = useState();

  // const onPriceChange = e => {
  //   setPrice(e.target.value);
  // };

  const [fields, setFields] = useState(
    () =>
      getFromStorage() || {
        firstStep: firstStepInitialValues,
        secondStep: secondStepInitialValues,
      }
  );

  //   updateStorage(fields);

  // useEffect(() => {
  //   updateStorage(fields);

  //   return () => {
  //     if (isSubmitted) {
  //       clearStorage();
  //     }
  //   };
  // }, [fields, updateStorage, clearStorage, isSubmitted]);

  const onFirstStepSubmit = values => {
    setFields(prevState => ({ ...prevState, firstStep: values }));
    // updateStorage(fields);
    setStep(2);
  };

  const onSecondStepSubmit = async (values, actions) => {
    // console.log(values);
    setFields(prevState => ({ ...prevState, secondStep: values }));
    const data = {
      ...fields.firstStep,
      ...fields.secondStep,
      ...values,
      image: petAvatarURL,
    };

    if (data.price === '') {
      delete data.price;
    }

    // console.log(values);
    const response = await addPet(data);
    if (response.data.result) {
      // actions.resetForm();
      // clearStorage();
      // setFields({
      //   firstStep: firstStepInitialValues,
      //   secondStep: secondStepInitialValues,
      // });
      // setIsSubmitted(true);
      onClose();
      navigate(ROUTES.NOTICES_OWN);
    }

    // console.log(response);
  };

  const onFileChange = e => {
    const imgFile = e.target.files[0];
    setPetAvatarURL(imgFile);
  };

  // console.log(fields.firstStep.category);

  return createPortal(
    <>
      <CommonModal onClose={onClose}>
        <AddPetWrapper>
          {/* STEP -1 */}
          {step === 1 && (
            <Formik
              initialValues={fields.firstStep}
              onSubmit={onFirstStepSubmit}
              //   validationSchema={validationSchema}
            >
              <Form id="first_step_form">
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
                      value={CATEGORIES.LOST_FOUND}
                      onClick={e => {
                        // console.log(e.target.value);
                      }}
                    />
                    <CategoryLabel htmlFor="lost_found">
                      lost/found
                    </CategoryLabel>
                  </CategoryItem>

                  <CategoryItem>
                    <CategoryRadio
                      id="in_good_hands"
                      type="radio"
                      name="category"
                      value={CATEGORIES.IN_GOOD_HANDS}
                      onClick={e => {
                        // console.log(e.target.value);
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
                      value={CATEGORIES.SELL}
                      onClick={e => {
                        // console.log(e.target.value);
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
                    <Input
                      type="text"
                      placeholder="Type name pet"
                      name="name"
                    />
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
                    type="submit"
                    form="first_step_form"
                    // onClick={() => {
                    //   setStep(2);
                    // }}
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
              </Form>
            </Formik>
          )}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* STEP -2 */}
          {step === 2 && (
            <Formik
              initialValues={fields.secondStep}
              onSubmit={onSecondStepSubmit}
              //   validationSchema={validationSchema}
            >
              <StyledForm id="second_step_form">
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
                    <Input
                      type="text"
                      placeholder="Type location"
                      name="place"
                    />
                  </Label>

                  {fields.firstStep.category === CATEGORIES.SELL && (
                    <Label>
                      Price:
                      <Input
                        type="text"
                        placeholder="Type price"
                        name="price"
                        // value={price}
                        // onChange={onPriceChange}
                      />
                    </Label>
                  )}
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
                      onChange={onFileChange}
                    />
                  </UploadLabel>
                  {/* <div style={{ width: '100px', height: '100px' }}>
                    {' '}
                    <img src={avatar} alt="avatar" />
                  </div> */}
                </UploadWrapper>
                <CommentWrapper>
                  <CommentDecription>Comments</CommentDecription>
                  <CommentsField
                    cols="5"
                    placeholder="Type comment"
                    name="comments"
                  ></CommentsField>
                </CommentWrapper>
                <ToolBar>
                  <NextButton type="submit" form="second_step_form">
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
              </StyledForm>
            </Formik>
          )}
        </AddPetWrapper>
      </CommonModal>
    </>,
    modalRoot
  );
};

export default AddNoticeModal;
