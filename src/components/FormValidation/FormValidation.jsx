import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import { Error } from './FormValidation.styled';
const emailValid =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;
const nameValid = /^[^\s][a-zA-zа-яіїєА-ЯІЇЄ .'-]*$/;
const passwordValid = /^[^ ]+$/;
const phoneValid = /^[+]{1}[0-9]{12}$/;
const locationValid = /^[a-zA-Zа-яіїєА-ЯІЇЄ .'-]+[,][ ][a-zA-Zа-яіїєА-ЯІЇЄ .'-]+$/;
const validationLogin = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailValid, "Email must contain '@', example: user@mail.com")
    .max(70, 'Maximum 70 characters')
    .min(10, "Minimum 10 characters")
    .email(),
  password: yup
    .string()
    .matches(passwordValid, 'Please enter min 7 characters and max 32')
    .max(32, 'Please enter 32 characters or less')
    .min(7, 'Enter 7 or more characters')
    .required('Password field is required'),
});
const validationRegisterStepOne = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailValid, "Email must contain '@', example: user@mail.com")
    .max(70, 'Maximum 70 characters')
    .min(10, "Minimum 10 characters")
    .email(),
  password: yup
    .string()
    .matches(passwordValid, 'Please enter min 7 characters and max 32')
    .max(32, 'Please enter 32 characters or less')
    .min(7, 'Enter 7 or more characters')
    .required('Password field is required'),
  confirmPassword: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: () =>
      yup
        .string()
        .oneOf([yup.ref('password')], ' Please confirm your password')
        .required('Confirm field is required'),
  }),
});

const validationRegisterStepTwo = yup.object().shape({
  name: yup
    .string()
    .required('Name field is required')
    .matches(nameValid, 'Name field can contain any letters')
    .max(24, "Max 24 characters")
    .min(1, "Min 1 character"),
  city: yup
    .string()
    .matches(
      locationValid,
      'Location field must contain two words separated by a comma'
    )
    .min(5, "Min 5 characters")
    .max(35, "Max 35 characters"),
  phone: yup
    .string()
    .matches(
      phoneValid,
      'The phone number must be in the format +380123456789'
    ),
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
