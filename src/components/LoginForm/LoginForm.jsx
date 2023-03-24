import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { ToastContainer, Slide } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import useAuth from '../../hooks/useAuth/useAuth';
import {
  validationLogin,
  InputError,
  InputCorrect,
} from 'components/FormValidation';
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
  const { isSubmit } = useAuth();
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
    ).then(res => {
      
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
            handleChange
          >
            {formik => (
              <FormAuth>
                <Label>
                  <Input
                    className={!formik.errors.email && formik.values.email !== '' ? 'success' : formik.errors.email && formik.values.email !== '' ? 'error' : 'default'}
                    name="email"
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                  />
                  {!formik.errors.email && formik.values.email !== '' ? (
                    <InputCorrect message="Email is correct"/>
                  ) : (
                    null
                  )}
                  <InputError name="email" />
                </Label>
                <Label>
                  <Input
                 className={!formik.errors.password && formik.values.password !== '' ? 'success' : formik.errors.password && formik.values.password !== '' ? 'error' : 'default'}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <IconShow onClick={togglePassword}>
                    {showPassword ? <BiHide /> : <BiShow />}
                  </IconShow>
                  {!formik.errors.password && formik.values.password !== '' ? (
                    <InputCorrect message="Password is correct"/>
                  ) : (
                    null
                  )}
                  <InputError name="password" />
                </Label>
                {isSubmit ? (
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
