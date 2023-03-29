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
  // showPrice: false,
};

export const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ,.'-][^\\_]+$/;

export const locationPattern =
  /^[a-zA-Zа-яіїєА-ЯІЇЄ ,.'-]+[,][ ][a-zA-Zа-яіїєА-ЯІЇЄ ,.'-]+$/;

export const birthdayPattern =
  /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.(20[2-9][0-9]|30[0-9][0-9]|31[0-2][0-9])$/;

//test
