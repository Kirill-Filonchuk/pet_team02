import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';

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
