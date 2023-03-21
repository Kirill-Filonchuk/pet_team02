import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/operations';
import {
  validationRegisterStepOne,
  validationRegisterStepTwo,
  InputError,
} from 'components/FormValidation';
import { MultiStepForm, FormStep } from './MultiForm';
import { BiShow, BiHide } from 'react-icons/bi';
import Container from 'components/Container';

import {
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
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { email, password, confirmPassword, name, city, phone } = values;
    if (password === confirmPassword) {
      dispatch(
        register({
          email: email,
          password: password,
          name: name,
          city: city,
          phone: phone,
        })
      ).then(res => {
        if (res.payload.status === 'success') {
          navigate('/user', { replace: true });
        }
      });
    }
    actions.resetForm();
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container>
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
              name="confirmPassword"
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
            <InputError name="confirmPassword" />
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
              name="city"
              placeholder="City, region"
              autoComplete="off"
            />
            <InputError name="city" />
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
    </Container>
  );
};

export default RegisterForm;
