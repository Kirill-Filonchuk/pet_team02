import { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { logIn } from "redux/auth/operations";
import { Formik } from 'formik';
import { validationLogin, InputError } from 'components/FormValidation';

import Container from '../ContainerForm';
import { BiShow, BiHide } from 'react-icons/bi';

import {
  Wrapper,
  Title,
  FormLogin,
  Label,
  Input,
  IconShow,
  BtnFormSubmit,
  TextLink,
  LinkToRegister,
} from './LoginForm.styled';

const LoginForm = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLogin}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormLogin>
              <Label>
                <Input
                  name="email"
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                />
                <InputError name="email" />
              </Label>
              <Label>
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  autoComplete="off"
                />
                <IconShow onClick={togglePassword}>
                  {showPassword ? <BiHide size={24} /> : <BiShow size={24} />}
                </IconShow>
                <InputError name="password" />
              </Label>
              <BtnFormSubmit type="submit">Login</BtnFormSubmit>
            </FormLogin>
          )}
        </Formik>
        <TextLink>
          <span>Don't have an account?</span>
          {/* <LinkToRegister to="/register">Register</LinkToRegister> */}
          <span> Register</span>
        </TextLink>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
