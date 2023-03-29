import FirstStepForm from './FirstStepForm';
import { Form, useFormikContext } from 'formik';
import { useState } from 'react';
import SecondStepForm from './SecondStepForm';

const AddNoticeForm = ({
  onClose,
  onAvatarChange,
  storage,
  isFileNeeded,
  avatarURL,
  isAddingPet,
  formik,
}) => {
  const { updateStorage } = storage;
  const [step, setStep] = useState(1);

  const { values } = useFormikContext();
  // const updatedValues = { ...values };
  // delete updatedValues.price;
  // updateStorage(updatedValues);
  updateStorage(values);

  const onNextClickHandler = () => {
    setStep(2);
  };

  return (
    <Form>
      {/*STEP - 1 */}
      <FirstStepForm
        step={step}
        onClickNext={onNextClickHandler}
        onClose={onClose}
        // errors={errors}
        // touched={touched}
        // validateForm={validateForm}
        formik={formik}
      />

      {/*STEP - 2 */}
      <SecondStepForm
        step={step}
        values={values}
        onAvatarChange={onAvatarChange}
        onClickBack={() => {
          setStep(1);
        }}
        avatarURL={avatarURL}
        isAddingPet={isAddingPet}
        // errors={errors}
        // touched={touched}
        // validateForm={validateForm}
        isFileNeeded={isFileNeeded}
        formik={formik}
      />
    </Form>
  );
};

export default AddNoticeForm;

//catego title name birthday breed
