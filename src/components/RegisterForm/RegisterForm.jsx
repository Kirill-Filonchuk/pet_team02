import { useState } from 'react';
//import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
import {
  validationRegisterStepOne,
  validationRegisterStepTwo,
  InputError,
} from 'components/FormValidation';
import { MultiStepForm, FormStep } from './MultiForm';
import { BiShow, BiHide } from 'react-icons/bi';

import {
  Wrapper,
  Title,
  Label,
  Input,
  IconShow,
} from 'components/LoginForm/LoginForm.styled';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const initialValues = {
    email: '',
    password: '',
    confirm_password: '',
    name: '',
    location: '',
    phone: '',
  };
  // const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Wrapper>
      <Title>Registration</Title>
      <MultiStepForm initialValues={initialValues} onSubmit={handleSubmit}>
        <FormStep
          stepName="UserMain"
          validationSchema={validationRegisterStepOne}
        >
          <Label>
            <Input
              autoComplete="off"
              type="text"
              name="email"
              placeholder="Email"
            />
            <InputError name="email" />
          </Label>
          <Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            <IconShow onClick={togglePassword}>
              {showPassword ? <BiHide size={24} /> : <BiShow size={24} />}
            </IconShow>
            <InputError name="password" />
          </Label>
          <Label>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirm_password"
              placeholder="Confirm Password"
              autoComplete="off"
            />
            <IconShow onClick={toggleConfirmPassword}>
              {showConfirmPassword ? (
                <BiHide size={24} />
              ) : (
                <BiShow size={24} />
              )}
            </IconShow>
            <InputError name="confirm_password" />
          </Label>
        </FormStep>

        <FormStep
          stepName="UserLocation"
          validationSchema={validationRegisterStepTwo}
        >
          <Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
            />
            <InputError name="name" />
          </Label>
          <Label>
            <Input
              type="text"
              name="location"
              placeholder="City, region"
              autoComplete="off"
            />
            <InputError name="location" />
          </Label>
          <Label>
            <Input
              type="text"
              name="phone"
              placeholder="Mobile phone"
              autoComplete="off"
            />
            <InputError name="phone" />
          </Label>
        </FormStep>
      </MultiStepForm>
    </Wrapper>
  );
};

export default RegisterForm;
