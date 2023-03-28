// // import { notifyError } from 'components/Helpers/Toastify';
// import { useState } from 'react';
// // import { addPet } from 'redux/pet/operations';
// import { InputError, validationRegisterStepOne, validationRegisterStepTwo } from './ValidationAddUserPet/ValidationAddUserPet';
// // import { useDispatch } from 'react-redux';
// import { MultiStepForm, FormStep } from './MultiForm';
// import {
//   Title,
//   TextFile,
//   Plus,
//   Label,
//   LabelFile,
//   Input,
//   InputFile,
//   Section,
//   Wrapper,
//   Textarea,
// } from './AddUserPetForm.styled';
// // import { notifyError } from 'components/Helpers/Toastify';
// import { useAddUserPetMutation } from 'redux/pet/userPetsApi';

// const AddUserPetForm = () => {

// const [addUserPet]= useAddUserPetMutation();

//  const [photo, setPhoto] = useState("");
//   const initialValues = {
//     name: '',
//     birthday: '',
//     photo: '',
//     breed: '',
//     comment: '',
//   };
// console.log(photo);
//   const addUserPetFile = (e)=>{
//     setPhoto(e.target.files[0]);
//     console.log(e.target.files);
//   };

//   const handleSubmit = (values, actions) => {
//     const { name, birthday, breed, comment } = values;
//     alert(JSON.stringify(values, null, 2))
//     addUserPet({name, birthday, photo, breed, comment});

//   };

//   return (
//     <Section>
//       <Wrapper>
//         {/* <ToastContainer transition={Slide} /> */}
//         <Title> Add Pet </Title>

//         <MultiStepForm  initialValues={initialValues} onSubmit={handleSubmit}>
//           <FormStep
//             stepName="step1"
//             validationSchema={validationRegisterStepOne}

//           >
//             <Label>
//               Name pet
//               <Input
//                 autoComplete="off"
//                 type="text"
//                 name="name"
//                 placeholder="Type name pet"
//               />

//               <InputError name="name" />
//             </Label>
//             <Label>
//               {' '}
//               Date of birth
//               <Input
//                 type="text"
//                 name="birthday"
//                 placeholder="Type date of birth"
//                 autoComplete="off"
//               />
//               <InputError name="birthday" />
//             </Label>
//             <Label>
//               {' '}
//               Breed
//               <Input
//                 type="text"
//                 name="breed"
//                 placeholder="Type breed"
//                 autoComplete="off"
//               />
//             </Label>
//           </FormStep>

//           <FormStep
//             stepName="step2"
//             validationSchema={validationRegisterStepTwo}
//           >
//             <TextFile>Add photo and some comments</TextFile>
//             <LabelFile>
//               <Plus />

//               <InputFile
//                 type="file"
//                 name="photo"
//                 placeholder=""
//                 autoComplete="off"
//                 onChange={addUserPetFile}
//               />
//               <InputError name="photo" />

//             </LabelFile>
//             <Label>
//               Comments
//               <Textarea
//                 type="text"
//                 name="comment"
//                 placeholder="Type comments"
//                 autoComplete="off"

//               />
//               <InputError name="comment" />
//             </Label>
//           </FormStep>
//         </MultiStepForm>

//       </Wrapper>
//     </Section>
//   );
// };

// export default AddUserPetForm;
// =====================================================================
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
} from './AddUserPetForm.styled';


const AddUserPetForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const { isPending } = useAuth();
  const navigate = useNavigate();
  const [addUserPet] = useAddUserPetMutation();
  const [photo, setPhoto] = useState('');
  const [url, setUrl] = useState('');

  const initialValues = {
    name: '',
    birthday: '',
    photo: '',
    breed: '',
    comment: '',
  };




  const addUserPetFile = e => {
    console.log(e.target.value);
    setPhoto(e.currentTarget.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
    
  };

  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    const { name, birthday, breed, comment } = values;
    console.log(values);
    

    const test = { name, birthday, photo, breed, comment };
    console.log(test);
    addUserPet( test ).then(res => {


      if (res.payload.code === 201) {
        navigate('/user', { replace: true });
        actions.resetForm();
      }
    });
  };

  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Section>
      <Wrapper>
        <ToastContainer transition={Slide} />
        <Title>Add pet</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={
            step === 1 ? validationRegisterStepOne : validationRegisterStepTwo
          }
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values }) => (
            <Form>
              {step === 1 && (
                <>
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

                      <ButtonBack type="button" onClick={onClose}>
                        Cancel
                      </ButtonBack>
                    </WraperBtn>
                  )}
                </>
              )}
              {step === 2 && (
                <>
                  <TextFile>Add photo and some comments</TextFile>

                  <WrapperPhoto style={{ width: '182px', height: '182px' }}>
                    {photo && (
                      <img
                        src={url}
                        alt=" avatar"
                        style={{ width: '100%', height: '100%' }}
                      />
                    )}

                    <LabelFile>
                      {/* {url && <Plus />} */}
                      <Plus />
                      <InputFile
                        className={
                          !errors.photo && values.photo !== ''
                            ? 'success'
                            : errors.photo && values.photo !== ''
                            ? 'error'
                            : 'default'
                        }
                        value={values.photo}
                        initialValues={values.photo}
                        type="file"
                        name="photo"
                        autoComplete="off"
                        onChange={addUserPetFile}
                      />
                      {!errors.photo && values.photo !== '' ? (
                        <InputCorrect photo="Photo is correct" />
                      ) : null}
                      <InputError name="photo" />
                    </LabelFile>
                  </WrapperPhoto>
                  <Label>
                    {' '}
                    Comments
                    <Textarea
                      Comments
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
                    />
                    {!errors.comment && values.comment !== '' ? (
                      <InputCorrect name="Comment is correct" />
                    ) : null}
                    <InputError name="comment" />
                  </Label>

                  {isPending ? (
                    <Spinner />
                  ) : (
                    <WraperBtn>
                      <BtnFormSubmit
                        disabled={errors.photo || errors.comment}
                        type="submit"
                      >
                        Done
                      </BtnFormSubmit>
                      <ButtonBack type="button" onClick={prevStep}>
                        Back
                      </ButtonBack>
                    </WraperBtn>
                  )}
                </>
              )}
            </Form>
          )}
        </Formik>
        {/* <TextLink>
            <span>Already have an account? </span>
            <LinkToLogin to="/login">Login</LinkToLogin>
          </TextLink> */}
      </Wrapper>
    </Section>
  );
};
export default AddUserPetForm;
