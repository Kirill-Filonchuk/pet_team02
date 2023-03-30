import * as yup from 'yup';
import { parse, isDate } from 'date-fns';
import {
  ADD_NOTICE_CATEGORIES,
  ADD_NOTICE_GENDER,
  breedPattern,
  locationPattern,
  namePattern,
} from './constants';

const commonSchema = {
  title: yup
    .string()
    .matches(namePattern, 'title field can contain any letters')
    .min(2)
    .max(48)
    .required(),

  name: yup
    .string()
    .matches(namePattern, 'name field can contain any letters')
    .min(2, 'min 2 character')
    .max(16, 'max 16 characters')
    .required('name field is required'),

  birthday: yup
    .date()
    .test('len', 'must be exactly DD.MM.YYYY', (value, { originalValue }) => {
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
    .typeError('please enter a valid date: dd.MM.yyyy')
    .required()
    .min('01.01.1950', 'date is too early')
    .max(new Date()),

  breed: yup
    .string()
    .matches(breedPattern, 'breed field can contain any letters')
    .min(2)
    .max(24)
    .required(),

  place: yup
    .string()
    .matches(locationPattern, `locattion must be like 'Irpin, Kyiv'`)
    .min(5)
    .required(),

  sex: yup
    .string()
    .oneOf([ADD_NOTICE_GENDER.MALE, ADD_NOTICE_GENDER.FEMALE])
    .required(),

  category: yup
    .string()
    .oneOf([
      ADD_NOTICE_CATEGORIES.SELL,
      ADD_NOTICE_CATEGORIES.IN_GOOD_HANDS,
      ADD_NOTICE_CATEGORIES.LOST_FOUND,
    ])
    .required(),

  comments: yup.string().min(8).max(120).required(),
};

const schemaWithPrice = {
  ...commonSchema,

  price: yup
    .string()
    .matches(/^(?!0)\d+$/, 'must be an integer and not starts with zero')
    .required(),
};

export const validationSchemaCommon = yup.object().shape(commonSchema);
export const validationSchemaWithPrice = yup.object().shape(schemaWithPrice);
