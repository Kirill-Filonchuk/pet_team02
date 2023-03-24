import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { ToastContainer, Slide } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import useAuth from '../../hooks/useAuth/useAuth';
import { validationLogin, InputError } from 'components/FormValidation';
import { notifyError } from 'components/Helpers/Toastify';
import Spinner from 'components/Helpers/Spinner';
import { BiShow, BiHide } from 'react-icons/bi';

import Container from 'components/Container';
import {
  Section,
  Title,
  FormAuth,
  Label,
  Input,
  IconShow,
  BtnFormSubmit,
  TextLink,
  LinkToRegister,
  Wrapper,
} from './LoginForm.styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    ).then((res) => {
      console.log(res)
      if (res.payload.code === 200) {
        navigate('/user', { replace: true });
        actions.resetForm();
      }
      if (res.payload === 'Request failed with status code 409') {
        notifyError('User not found');
      }
      if (res.payload === 'Request failed with status code 401') {
        notifyError('Invalid email or password');
      }
    });
  };
  return (
    <Section>
      <Container>
        <Wrapper>
          <ToastContainer transition={Slide} />
          <Title>Login</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationLogin}
            onSubmit={handleSubmit}
          >
            {() => (
              <FormAuth>
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
                    {showPassword ? <BiHide /> : <BiShow />}
                  </IconShow>
                  <InputError name="password" />
                </Label>
                {isRefreshing ? (
                  <Spinner />
                ) : (
                  <BtnFormSubmit type="submit">Login</BtnFormSubmit>
                )}
              </FormAuth>
            )}
          </Formik>
          <TextLink>
            <span>Don't have an account? </span>
            <LinkToRegister to="/register">Register</LinkToRegister>
          </TextLink>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default LoginForm;
