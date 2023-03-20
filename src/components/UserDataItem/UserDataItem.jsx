import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';
// import { toast } from 'react-toastify';

import {
  BtnImage,
  BtnImageDis,
  BtnImageDone,
  FieldText,
  StyledBtn,
  StyledInput,
  StyledValue,
  Wrapper,
} from './UserDataItem.styled';

const today = new Date();
const nameSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
});
const emailSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
});
const citySchema = yup.object({
  city: yup
    .string()
    .min(2)
    .max(36)
    .matches(
      /(\b[a-zA-Z]+(,\s*)\s*[a-zA-Z]+\b)/g,
      'Only in format "City, Region"'
    )
    .required('Field is required!'),
});
const phoneSchema = yup.object({
  phone: yup
    .string()
    .min(13, 'Phone should be in format +380671234567')
    .max(13, 'Phone should be in format +380671234567')
    .matches(
      /^\+[0-9]{3}\d+\d{3}\d{2}\d{2}/,
      'Phone should be in format +380671234567'
    ),
});
const birthdaySchema = yup.object({
  birthday: yup
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
    .typeError('Please enter a valid date')
    .required()
    .min('01.01.1950', 'Date is too early')
    .max(today),
});
const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

export default function UserDataItem({
  field,
  initValue,
  setIsDisabledBtn,
  isDisabledBtn,
  setUser,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const addSchema = f => {
    switch (f) {
      case 'name':
        return nameSchema;
      case 'email':
        return emailSchema;

      case 'city':
        return citySchema;

      case 'birthday':
        return birthdaySchema;

      case 'phone':
        return phoneSchema;

      default:
        return nameSchema;
    }
  };
  return (
    <Formik
      validationSchema={addSchema(field)}
      initialValues={initValue}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={values => {
        if (Object.keys(values)[0] === 'birthday') {
          setUser({ birthDate: parseDateToISO(values.birthday) });
          setIsEdit(false);
          setIsDisabledBtn(false);
          return;
        }
        if (Object.keys(values)[0] === 'city') {
          setUser({ location: values.city });
          setIsEdit(false);
          setIsDisabledBtn(false);
          return;
        }

        setUser(values);
        setIsEdit(false);
        setIsDisabledBtn(false);
      }}
    >
      {({ values, handleSubmit, errors, touched }) => (
        <Form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <Wrapper>
              <FieldText>{capitalize(field)}:</FieldText>
              {isEdit ? (
                <StyledInput autoComplete="off" name={field} />
              ) : (
                <StyledValue>{values[field]}</StyledValue>
              )}

              {!isEdit && !isDisabledBtn && (
                <StyledBtn
                  type="button"
                  onClick={() => {
                    setIsEdit(true);
                    setIsDisabledBtn(true);
                  }}
                >
                  <BtnImage />
                </StyledBtn>
              )}
              {isDisabledBtn && !isEdit && (
                <StyledBtn type="button" disabled isDisabled>
                  <BtnImageDis />
                </StyledBtn>
              )}
              {isEdit && (
                <StyledBtn type="submit" onClick={handleSubmit}>
                  <BtnImageDone />
                </StyledBtn>
              )}
            </Wrapper>
            <ErrorMessage
              name={field}
              render={msg => (
                <div
                  style={{
                    color: 'red',
                    fontSize: '.7rem',
                    // position: 'absolute',
                    // left: '13%',
                    // top: '85%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  {/* {toast.error(msg, { autoClose: 3000 })} */}
                  {msg}
                </div>
              )}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

// export default UserDataItem;

function parseDateToISO(str) {
  if (str === '00.00.0000') {
    return null;
  }
  const dateParts = str.split('.');
  const formattedDate = new Date(
    +dateParts[2],
    +dateParts[1] - 1,
    +dateParts[0]
  );

  return formattedDate.toISOString();
}
