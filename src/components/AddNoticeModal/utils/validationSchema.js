import * as yup from 'yup';
import {
  ADD_NOTICE_CATEGORIES,
  ADD_NOTICE_GENDER,
  namePattern,
} from './constants';

export const validationSchema = yup.object().shape({
  title: yup.string().min(6).required(),
  name: yup
    .string()
    .matches(
      namePattern,
      'name cannot includes digits and symbols  except punctuation'
    )
    .required(),
  birthday: yup.string().required(),
  breed: yup.string().min(2).max(20).required(),
  place: yup.string().min(3).required(),
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
  price: yup.string(),
  // avatar: yup.mixed().required('File is required - che'),
  comments: yup.string().min(8).max(120).required(),
});
