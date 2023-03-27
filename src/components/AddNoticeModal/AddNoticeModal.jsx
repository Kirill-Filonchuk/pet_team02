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
import { Formik, Form, useFormikContext, useFormik } from 'formik';
import { useStorage } from 'hooks/useStorage';
import { useEffect } from 'react';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';
import AddNoticeForm from './AddNoticeForm';

const modalRoot = document.querySelector('#modal-root');

export const ADD_NOTICE_CATEGORIES = {
  SELL: 'sell',
  IN_GOOD_HANDS: 'in-good-hands',
  LOST_FOUND: 'lost-found',
};

const initialValues = {
  category: '',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  sex: '',
  place: '',
  price: '',
  comments: '',
};

const AddNoticeModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [addPet] = useAddNoticeMutation();

  const storage = useStorage('add-notice-fields');

  const { getFromStorage, updateStorage, clearStorage } = storage;

  console.log('storage', getFromStorage());
  // const [step, setStep] = useState(1);
  const [petAvatarURL, setPetAvatarURL] = useState();
  // const [fields, setFields] = useState(() => getFromStorage() || initialValues);

  // useEffect(() => {
  //   updateStorage(fields);
  // }, [fields, updateStorage]);

  // const onNextClickHandler = () => {
  //   // updateStorage(fields);
  //   setStep(2);
  // };

  // const onFirstStepSubmit = values => {
  //   setFields(prevState => ({ ...prevState, firstStep: values }));
  //   // updateStorage(fields);
  //   setStep(2);
  // };

  // const onSecondStepSubmit = async (values, actions) => {
  //   // console.log(values);
  //   setFields(prevState => ({ ...prevState, secondStep: values }));
  //   const data = {
  //     ...fields.firstStep,
  //     ...fields.secondStep,
  //     ...values,
  //     image: petAvatarURL,
  //   };

  // if (data.price === '') {
  //   delete data.price;
  // }

  //   // console.log(values);
  //   const response = await addPet(data);
  //   if (response.data.result) {
  //     // actions.resetForm();
  //     // clearStorage();
  //     // setFields({
  //     //   firstStep: firstStepInitialValues,
  //     //   secondStep: secondStepInitialValues,
  //     // });
  //     // setIsSubmitted(true);
  //     onClose();
  //     navigate(ROUTES.NOTICES_OWN);
  //   }

  //   // console.log(response);
  // };

  const onSubmitHandler = async (values, actions) => {
    const data = { ...values, image: petAvatarURL };
    // const data = { ...values };

    if (data.price === '') {
      delete data.price;
    }

    console.log(data);
    const response = await addPet(data);
    if (response.data.result) {
      actions.resetForm();
      clearStorage();
      onClose();
      navigate(ROUTES.NOTICES_OWN);
    }
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
          <Formik
            initialValues={getFromStorage() || initialValues}
            onSubmit={onSubmitHandler}
          >
            <AddNoticeForm
              onClose={onClose}
              onAvatarChange={onFileChange}
              storage={storage}
            />
          </Formik>
        </AddPetWrapper>
      </CommonModal>
    </>,
    modalRoot
  );
};

export default AddNoticeModal;
