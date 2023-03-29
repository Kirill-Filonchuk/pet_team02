import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import { Error, Correct } from './ValidationAddUserPet.styled';
import { parse, isDate } from 'date-fns';

const nameValid = /^[^\s][a-zA-Zа-яіїєА-ЯІЇЄ.'-]*$/;
const breedValid = /^[^\s][a-zA-Zа-яіїєА-ЯІЇЄ.'-]*$/;
// const birthdayValid = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
// eslint-disable-next-line no-useless-escape
const comentValid =
  // eslint-disable-next-line no-useless-escape
  /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ][a-zA-Zа-яА-ЯіІїЇєЄґҐ'?,.\()-@!_\s]{7,119}$/;

const validationRegisterStepOne = yup.object().shape({
  name: yup
    .string()
    .matches(nameValid, 'Name field can contain any letters')
    .max(16, 'Max 16 characters')
    .min(2, 'Min 2 character')
    .required('Name field is required'),

  birthday: yup
    // .string()
    // .required('Birthday field is required')
    // .matches(birthdayValid, 'Birthday example: 30.03.2023')
    // .max(10, 'Maximum 10 characters')
    // .min(10, 'Minimum 10 characters'),
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (_, originalValue) {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());

      return parsedDate;
    })
    .typeError('Please enter a valid date: dd.MM.yyyy')
    .required()
    .min('01.01.1950', 'Date is too early')
    .max(new Date()),

  breed: yup
    .string()
    .matches(breedValid, 'Please enter min 7 characters and max 32')
    .max(16, 'Please enter 16 characters or less')
    .min(2, 'Enter 2 or more characters')
    .required('Breed field is required'),
});

const validationRegisterStepTwo = yup.object().shape({
  // photo: yup.nullable().required('Photo field is required'),

  comment: yup
    .string()
    .matches(comentValid, 'Please enter min 7 characters and max 119')
    .min(7, 'Enter 119 or more characters')
    .max(119, 'Please enter 120 characters or less')
    .required('Comment field is required'),
});

const InputError = ({ name, step, comment }) => {
  return (
    <Error>
      <ErrorMessage
        comment
        name={name}
        // step={step}
        render={message => <p>{message}</p>}
      />
    </Error>
  );
};
const InputCorrect = ({ name, step, comment }) => {
  return (
    <Correct
      // step={step}
      name={name}
      comment
    >
      <p style={{ margin: 0 }}>{name}</p>
    </Correct>
  );
};

export {
  InputError,
  InputCorrect,
  validationRegisterStepOne,
  validationRegisterStepTwo,
};
