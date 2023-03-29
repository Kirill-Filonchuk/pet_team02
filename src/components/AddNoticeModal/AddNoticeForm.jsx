import FirstStepForm from './FirstStepForm';
import { Form, useFormikContext } from 'formik';
import { useState } from 'react';
import SecondStepForm from './SecondStepForm';
import { useEffect } from 'react';

const AddNoticeForm = ({
  onClose,
  onAvatarChange,
  noticeStorage,
  isFileNeeded,
  avatarURL,
  isAddingPet,
  formik,
  handleSwitchSchema,
}) => {
  const [step, setStep] = useState(1);

  const { values } = useFormikContext();

  useEffect(() => {
    noticeStorage.setStorageValue(values);
  }, [values, noticeStorage]);

  const onNextClickHandler = () => {
    setStep(2);
  };

  return (
    <Form>
      {/*STEP - 1 */}
      <FirstStepForm
        handleSwitchSchema={handleSwitchSchema}
        step={step}
        onClickNext={onNextClickHandler}
        onClose={onClose}
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
        isFileNeeded={isFileNeeded}
        formik={formik}
      />
    </Form>
  );
};

export default AddNoticeForm;

//catego title name birthday breed
