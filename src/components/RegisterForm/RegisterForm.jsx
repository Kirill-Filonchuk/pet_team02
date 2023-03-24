import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/operations';
import {
  validationRegisterStepOne,
  validationRegisterStepTwo,
  InputError,
} from 'components/FormValidation';
import { BiShow, BiHide } from 'react-icons/bi';
import { ToastContainer, Slide } from 'react-toastify';
import { notifyError } from 'components/Helpers/Toastify/Toastify';

import { MultiStepForm, FormStep } from './MultiForm';
import Container from 'components/Container';
import {
  Title,
  Label,
  Input,
  IconShow,
  Section,
  Wrapper,
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
        console.log(res);
        if (res.payload.code === 201) {
          navigate('/user', { replace: true });
          actions.resetForm();
        }
        if (res.payload === 'Request failed with status code 409') {
          notifyError(`User with email ${email} already exist`);
        }
      });
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Section>
      <Container>
        <Wrapper>
          <ToastContainer transition={Slide} />
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
        </Wrapper>
      </Container>
    </Section>
  );
};

export default RegisterForm;
