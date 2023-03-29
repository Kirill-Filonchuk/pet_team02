import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router';
import Spinner from 'components/Helpers/Spinner';
import { ToastContainer, Slide } from 'react-toastify';
import useAuth from 'hooks/useAuth/useAuth';
import { useAddUserPetMutation } from 'redux/pet/userPetsApi';
import {
  InputError,
  validationRegisterStepOne,
  validationRegisterStepTwo,
  InputCorrect,
} from './ValidationAddUserPet/ValidationAddUserPet';
import {
  Title,
  Label,
  Input,
  Wrapper,
  Section,
  Textarea,
  InputFile,
  LabelFile,
  TextFile,
  Plus,
  ButtonBack,
  BtnFormSubmit,
  WraperBtn,
  WrapperPhoto,
  PetsPhoto,
  WrapperStepOne,
  LabelTextarea,
  CustomErrorChe,
} from './AddUserPetForm.styled';

const AddUserPetForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const { isPending } = useAuth();
  const navigate = useNavigate();
  const [addUserPet] = useAddUserPetMutation();
  const [photo, setPhoto] = useState('');
  const [url, setUrl] = useState('');

  const [isFileNeeded, setIsFileNeeded] = useState(false);

  const initialValues = {
    name: '',
    birthday: '',
    photo: '',
    breed: '',
    comment: '',
  };

  const addUserPetFile = e => {
    if (e.currentTarget.files[0]) {
      setIsFileNeeded(false);
    }

    // console.log(e.target.value);
    // const imgFile = e.target.files[0];

    // if (imgFile) {
    //   const isLarge =
    //     (imgFile.size / 1_000_000).toFixed(2) > 1
    //       ? alert('Image size is too large, maximum 1MB allowed.', {
    //           autoClose: 5000,
    //         })
    //       : null;
    //   if (isLarge) return;
    // }
    setPhoto(e.currentTarget.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (values, actions) => {
    //if no petAvatarURL - return error message
    if (!photo) {
      setIsFileNeeded(true);
      return;
    }

    // alert(JSON.stringify(values, null, 2));
    const { name, birthday, breed, comment } = values;
    const test = { name, birthday, photo, breed, comment };
    addUserPet(test).then(res => {
      if (res.payload?.code === 201) {
        navigate('/user', { replace: true });
        actions.resetForm();
      }
    });
    onClose();
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Section>
      <Wrapper step={step}>
        <ToastContainer transition={Slide} />
        <Title step={step}>Add pet</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={
            step === 1 ? validationRegisterStepOne : validationRegisterStepTwo
          }
          onSubmit={handleSubmit}
          // validateOnBlur={false}
          validateOnChange={true}
        >
          {({ errors, touched, values }) => (
            <Form>
              {step === 1 && (
                <WrapperStepOne>
                  <Label>
                    Name pet
                    <Input
                      className={
                        !errors.name && values.name !== ''
                          ? 'success'
                          : errors.name && values.name !== ''
                          ? 'error'
                          : 'default'
                      }
                      autoComplete="off"
                      type="text"
                      name="name"
                      placeholder="Type date of Name"
                    />
                    {!errors.name && values.name !== '' ? (
                      <InputCorrect name="Name is correct" />
                    ) : null}
                    <InputError name="name" />
                  </Label>

                  <Label>
                    Date of birth
                    <Input
                      className={
                        !errors.birthday && values.birthday !== ''
                          ? 'success'
                          : errors.birthday && values.birthday !== ''
                          ? 'error'
                          : 'default'
                      }
                      type="text"
                      name="birthday"
                      placeholder="Type date of birth"
                      autoComplete="off"
                    />
                    {!errors.birthday && values.birthday !== '' ? (
                      <InputCorrect name="Birthday is correct" />
                    ) : null}
                    <InputError name="birthday" />
                  </Label>
                  <Label>
                    Breed
                    <Input
                      className={
                        !errors.breed && values.breed !== ''
                          ? 'success'
                          : errors.breed && values.breed !== ''
                          ? 'error'
                          : 'default'
                      }
                      type="text"
                      name="breed"
                      placeholder="Type breed"
                      autoComplete="off"
                    />
                    {!errors.breed && values.breed !== '' ? (
                      <InputCorrect name="Breed is correct" />
                    ) : null}
                    <InputError name="breed" />
                  </Label>
                  {isPending ? (
                    <Spinner />
                  ) : (
                    <WraperBtn>
                      <ButtonBack type="button" onClick={onClose}>
                        Cancel
                      </ButtonBack>
                      <BtnFormSubmit
                        disabled={
                          errors.name || errors.birthday || errors.breed
                        }
                        type="submit"
                        onClick={
                          values.name !== '' &&
                          values.birthday !== '' &&
                          values.breed !== ''
                            ? nextStep
                            : null
                        }
                      >
                        Next
                      </BtnFormSubmit>
                    </WraperBtn>
                  )}
                </WrapperStepOne>
              )}
              {step === 2 && (
                <>
                  <TextFile>Add photo and some comments</TextFile>

                  <WrapperPhoto>
                    <LabelFile>
                      {photo && (
                        <PetsPhoto
                          src={url}
                          alt=" avatar"
                          style={{ width: '100%', height: '100%' }}
                        />
                      )}
                      {!photo && <Plus />}
                      <InputFile
                        className={
                          !errors.photo && values.photo !== ''
                            ? 'success'
                            : errors.photo && values.photo !== ''
                            ? 'error'
                            : 'default'
                        }
                        // value={values.photo}
                        type="file"
                        name="photo"
                        autoComplete="off"
                        onChange={addUserPetFile}
                        accept="image/*"
                      />
                      {!errors.photo && values.photo !== '' ? (
                        <InputCorrect step={step} photo="Photo is correct" />
                      ) : null}
                    </LabelFile>
                  </WrapperPhoto>
                  {isFileNeeded && (
                    <CustomErrorChe>Please, attach image file</CustomErrorChe>
                  )}

                  <LabelTextarea>
                    Comments
                    <Textarea
                      // Comments
                      className={
                        !errors.comment && values.comment !== ''
                          ? 'success'
                          : errors.comment && values.comment !== ''
                          ? 'error'
                          : 'default'
                      }
                      type="text"
                      name="comment"
                      placeholder="Type comments"
                      autoComplete="off"
                      component="textarea"
                    />
                    {!errors.comment && values.comment !== '' ? (
                      <InputCorrect
                        comment={'comment'}
                        step={step}
                        name="Comment is correct"
                      />
                    ) : null}
                    <InputError
                      comment={'comment'}
                      step={step}
                      name="comment"
                    />
                  </LabelTextarea>

                  {isPending ? (
                    <Spinner />
                  ) : (
                    <WraperBtn>
                      <ButtonBack type="button" onClick={prevStep}>
                        Back
                      </ButtonBack>
                      <BtnFormSubmit
                        disabled={errors.photo || errors.comment}
                        type="submit"
                      >
                        Done
                      </BtnFormSubmit>
                    </WraperBtn>
                  )}
                </>
              )}
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Section>
  );
};
export default AddUserPetForm;
