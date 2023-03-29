export const ADD_NOTICE_CATEGORIES = {
  SELL: 'sell',
  IN_GOOD_HANDS: 'in-good-hands',
  LOST_FOUND: 'lost-found',
};

export const ADD_NOTICE_GENDER = {
  MALE: 'male',
  FEMALE: 'female',
};

export const initialValues = {
  category: '',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  sex: '',
  place: '',
  price: '',
  comments: '',
};

export const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ,.'-][^\\_]+$/;
