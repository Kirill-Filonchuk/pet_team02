import CommonModal from 'components/UIKit/CommonModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AddPetWrapper } from './AddNoticeModal.styled';
import { Formik } from 'formik';
import { useStorage } from 'hooks/useStorage';
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

  const { getFromStorage, clearStorage } = storage;
  const [petAvatarURL, setPetAvatarURL] = useState();

  const onSubmitHandler = async (values, actions) => {
    const data = { ...values, image: petAvatarURL };

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
