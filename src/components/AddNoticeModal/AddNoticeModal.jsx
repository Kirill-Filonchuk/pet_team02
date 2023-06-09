import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';
import CommonModal from 'components/UIKit/CommonModal';
import AddNoticeForm from './AddNoticeForm';
import { AddPetWrapper } from './AddNoticeModal.styled';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';
import { StorageService } from 'Services/storageService';
import { ADD_NOTICE_CATEGORIES, initialValues } from './utils/constants';
import {
  validationSchemaCommon,
  validationSchemaWithPrice,
} from './utils/validationSchema';
import { notifyAddNoticeError } from 'components/Helpers/Toastify';

const modalRoot = document.querySelector('#modal-root');
const noticeStorage = new StorageService('add-notice-fields');

const AddNoticeModal = ({ onClose, isOpen }) => {
  const navigate = useNavigate();
  const [addPet, { isLoading: isAddingPet }] = useAddNoticeMutation();

  const [petAvatarURL, setPetAvatarURL] = useState();
  const [isFileNeeded, setIsFileNeeded] = useState(false);
  const [avatarURL, setAvatarURL] = useState();

  //TOGGLE VALIDATION SCHEMA
  const [isPriceSchema, setIsPriceSchema] = useState(false);
  const handleSwitchSchema = isSellCategory => {
    setIsPriceSchema(isSellCategory);
  };
  //TOGGLE VALIDATION SCHEMA

  const onSubmitHandler = async (values, actions) => {
    const data = { ...values, image: petAvatarURL };

    if (data.category !== ADD_NOTICE_CATEGORIES.SELL) {
      delete data.price;
      delete data.showPrice;
    }

    //if no petAvatarURL - return error message
    if (!petAvatarURL) {
      setIsFileNeeded(true);
      return;
    }

    try {
      const response = await addPet(data);
      if (response.data.result) {
        actions.resetForm();
        noticeStorage.setStorageValue(initialValues);
        onClose();
        navigate(ROUTES.NOTICES_OWN);
      }
    } catch (err) {
      notifyAddNoticeError('Something went wrong! Cannot add notice.');
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

  const validationSchema = isPriceSchema
    ? validationSchemaWithPrice
    : validationSchemaCommon;

  return createPortal(
    <>
      <CommonModal onClose={onClose} isOpen={isOpen}>
        <AddPetWrapper>
          <Formik
            initialValues={noticeStorage.getStorageValue() || initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
            validateOnBlur
            validate={values => {
              const errors = {};
              if (values.showPrice && !values.price) {
                errors.price = 'price is required';
              }
              return errors;
            }}
          >
            {formik => {
              return (
                <>
                  <AddNoticeForm
                    handleSwitchSchema={handleSwitchSchema}
                    onClose={onClose}
                    onAvatarChange={onFileChange}
                    noticeStorage={noticeStorage}
                    isFileNeeded={isFileNeeded}
                    setIsFileNeeded={setIsFileNeeded}
                    avatarURL={avatarURL}
                    isAddingPet={isAddingPet}
                    formik={formik}
                  />
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
