import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import {Error, Correct } from './ValidationAddUserPet.styled';

const nameValid = /^[^\s][a-zA-Zа-яіїєА-ЯІЇЄ.'-]*$/;
const breedValid = /^[^\s][a-zA-Zа-яіїєА-ЯІЇЄ.'-]*$/;
const birthdayValid = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

const validationRegisterStepOne = yup.object().shape({
  name: yup
    .string()
    .matches(nameValid, 'Name field can contain any letters')
    .max(16, 'Max 16 characters')
    .min(2, 'Min 2 character')
    .required('Name field is required'),

  birthday: yup
    .string()
    .required('Birthday field is required')
    .matches(birthdayValid, 'Birthday example: 30.03.2023')
    .max(10, 'Maximum 10 characters')
    .min(10, 'Minimum 10 characters'),

  breed: yup
    .string()
    .matches(breedValid, 'Please enter min 7 characters and max 32')
    .max(16, 'Please enter 16 characters or less')
    .min(2, 'Enter 2 or more characters')
    .required('Breed field is required'),
});

const validationRegisterStepTwo = yup.object().shape({
  // photo: yup.string().required('Photo field is required'),

  comment: yup
    .string()
    .matches(/^[a-zA-Zа-яіїєА-ЯІЇЄ.'-]{8,120}$/, 'Please enter min 8 characters and max 120')
    .max(120, 'Please enter 120 characters or less')
    .min(8, 'Enter 8 or more characters')
    .required('Comment field is required'),
});


const InputError = ({ name }) => {
  return (
    <Error>
      <ErrorMessage
        name={name}
        render={message => <p style={{ margin: 0 }}>{message}</p>}
      />
    </Error>
  );
};
const InputCorrect = ({name}) => {
  return (
    <Correct>
      <p style={{ margin: 0 }}>{name}</p>
    </Correct>
  );
}



//  name: від 2 до 16 символів, Обов’язкове
//  birthday: формат дд.мм.гггг,
//  breed: від 2 до 16 символів, Обов’язкове
//  comment: від 8 до 120 символів. Обов’язкове


export { InputError,InputCorrect, validationRegisterStepOne, validationRegisterStepTwo };