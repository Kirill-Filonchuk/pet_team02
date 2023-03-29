import CommonModal from 'components/UIKit/CommonModal';
import AddNoticeForm from './AddNoticeForm';
import * as yup from 'yup';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AddPetWrapper } from './AddNoticeModal.styled';
import { Formik } from 'formik';
import { useStorage } from 'hooks/useStorage';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';

const modalRoot = document.querySelector('#modal-root');

export const ADD_NOTICE_CATEGORIES = {
  SELL: 'sell',
  IN_GOOD_HANDS: 'in-good-hands',
  LOST_FOUND: 'lost-found',
};

export const ADD_NOTICE_GENDER = {
  MALE: 'male',
  FEMALE: 'female',
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

const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ,.'-][^\\_]+$/;

const validationSchema = yup.object().shape({
  title: yup.string().min(6).required(),
  name: yup
    .string()
    .matches(
      namePattern,
      'name cannot includes digits and symbols  except punctuation'
    )
    .required(),
  birthday: yup.string().required(),
  breed: yup.string().min(2).max(20).required(),
  place: yup.string().min(3).required(),
  sex: yup
    .string()
    .oneOf([ADD_NOTICE_GENDER.MALE, ADD_NOTICE_GENDER.FEMALE])
    .required(),
  category: yup
    .string()
    .oneOf([
      ADD_NOTICE_CATEGORIES.SELL,
      ADD_NOTICE_CATEGORIES.IN_GOOD_HANDS,
      ADD_NOTICE_CATEGORIES.LOST_FOUND,
    ])
    .required(),
  price: yup.string(),
  // avatar: yup.mixed().required('File is required - che'),
  comments: yup.string().min(8).max(120).required(),
});

const AddNoticeModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [addPet, { isLoading: isAddingPet }] = useAddNoticeMutation();

  const storage = useStorage('add-notice-fields');

  const { getFromStorage, clearStorage } = storage;
  const [petAvatarURL, setPetAvatarURL] = useState();
  const [isFileNeeded, setIsFileNeeded] = useState(false);
  const [avatarURL, setAvatarURL] = useState();

  const onSubmitHandler = async (values, actions) => {
    const data = { ...values, image: petAvatarURL };

    if (data.price === '') {
      delete data.price;
    }

    //if no petAvatarURL - return error message
    if (!petAvatarURL) {
      setIsFileNeeded(true);
      return;
    }

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

    if (imgFile) {
      setIsFileNeeded(false);
    }

    const [type] = imgFile.type.split('/');
    if (type !== 'image') {
      return;
    }
    setPetAvatarURL(imgFile);
    setAvatarURL(URL.createObjectURL(imgFile));
  };

  return createPortal(
    <>
      <CommonModal onClose={onClose}>
        <AddPetWrapper>
          <Formik
            initialValues={getFromStorage() || initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
            validateOnBlur
          >
            {formik => {
              // console.log(validateForm);
              return (
                <>
                  <AddNoticeForm
                    onClose={onClose}
                    onAvatarChange={onFileChange}
                    storage={storage}
                    isFileNeeded={isFileNeeded}
                    setIsFileNeeded={setIsFileNeeded}
                    avatarURL={avatarURL}
                    isAddingPet={isAddingPet}
                    // errors={errors}
                    // touched={touched}
                    // validateForm={validateForm}
                    formik={formik}
                  />
                  {/* <button
                    type="button"
                    onClick={() => {
                      // setFieldTouched('name', true);
                      setTouched({ name: true, title: true });
                      validateForm();
                    }}
                  >
                    VALIDATE
                  </button> */}
                </>
              );
            }}
          </Formik>
        </AddPetWrapper>
      </CommonModal>
    </>,
    modalRoot
  );
};

export default AddNoticeModal;
