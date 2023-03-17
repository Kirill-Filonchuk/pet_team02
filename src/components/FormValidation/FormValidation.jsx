import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import { Error } from './FormValidation.styled';

const emailValid =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;
const nameValid = /^[a-zA-zа-яіїєА-ЯІЇЄ ]+$/;
const passwordValid = /^[^ ]{7,32}$/;
const phoneValid = /^[+]{1}[0-9]{12}$/;
const locationValid = /^[a-zA-Z]+[,][ ][a-zA-Z]+$/;

const validationLogin = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailValid, "Email must contain '@', example: user@mail.com ")
    .email(),
  password: yup
    .string()
    .matches(passwordValid, 'Please enter minimum 7 characters, maximum 32')
    .max(32, 'Please enter 32 characters or less')
    .min(7, 'Enter 7 or more characters')
    .required('Password field is required'),
});

const validationRegisterStepOne = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailValid, "Email must contain '@', example: user@mail.com ")
    .email(),
  password: yup
    .string()
    .matches(passwordValid, 'Please enter minimum 7 characters, maximum 32')
    .max(32, 'Please enter 32 characters or less')
    .min(7, 'Enter 7 or more characters')
    .required('Password field is required'),
  password_confirm: yup.string().when('password', {
    is: valid => (valid && valid.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref('password')], 'Confirm your password'),
  }),
});

const validationRegisterStepTwo = yup.object().shape({
  name: yup
    .string()
    .required('Name field is required')
    .matches(nameValid, 'Name field can contain any letters'),
  location: yup
    .string()
    .matches(
      locationValid,
      'Location field must contain two words separated by a comma'
    )
    .required('Location field is required'),
  phone: yup
    .string()
    .matches(phoneValid, 'The phone number must be in the format +380123456789')
    .required('Phone number field is required'),
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

export {
  validationLogin,
  InputError,
  validationRegisterStepOne,
  validationRegisterStepTwo,
};
