import * as yup from 'yup';
import { parse, isDate } from 'date-fns';
import {
  ADD_NOTICE_CATEGORIES,
  ADD_NOTICE_GENDER,
  locationPattern,
  namePattern,
} from './constants';

const commonSchema = {
  title: yup.string().min(2).max(48).required(),

  name: yup
    .string()
    .matches(namePattern, 'Name field can contain any letters')
    .min(2, 'Min 2 character')
    .max(16, 'Max 16 characters')
    .required('Name field is required'),

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
    .typeError('Please enter a valid date: dd.MM.yyyy')
    .required()
    .min('01.01.1950', 'Date is too early')
    .max(new Date()),

  breed: yup.string().min(2).max(24).required(),

  place: yup
    .string()
    .matches(locationPattern, `locattion must be like 'Irpin, Kyiv'`)
    .min(3)
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

  // showPrice: yup.boolean(),
  // price: yup.string().when('showPrice', {
  //   is: showPrice => showPrice === true,
  //   then: yup
  //     .string()
  //     .matches(/^(?!0)\d+$/, 'must be an integer and not starts with zero')
  //     .required(),
  // }),

  // avatar: yup.mixed().required('File is required - che'),
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
