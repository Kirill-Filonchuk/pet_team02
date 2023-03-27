import FirstStepForm from './FirstStepForm';
import { Form, useFormikContext } from 'formik';
import { useState } from 'react';
import SecondStepForm from './SecondStepForm';
import ErrorMessages from './ErrorMessages';

const AddNoticeForm = ({ onClose, onAvatarChange, storage, isFileNeeded }) => {
  const { updateStorage } = storage;
  const [step, setStep] = useState(1);

  const { values } = useFormikContext();
  const updatedValues = { ...values };
  delete updatedValues.price;
  updateStorage(updatedValues);

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
      />

      {/*STEP - 2 */}
      <SecondStepForm
        step={step}
        values={values}
        onAvatarChange={onAvatarChange}
        onClickBack={() => {
          setStep(1);
        }}
      />
      <ErrorMessages isFileNeeded={isFileNeeded} />
    </Form>
  );
};

export default AddNoticeForm;
