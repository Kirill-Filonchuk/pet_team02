import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { validationLogin, InputError } from 'components/FormValidation';
import { BiShow, BiHide } from 'react-icons/bi';

import {
  Wrapper,
  Title,
  FormAuth,
  Label,
  Input,
  IconShow,
  BtnFormSubmit,
  TextLink,
  LinkToRegister,
  FormContainer,
} from './LoginForm.styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      if (res.payload.status === 'success') {
        navigate('/user', { replace: true });
      }
    });
    actions.resetForm();
  };
  return (
    <FormContainer>
      <Wrapper>
        <Title>Login</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLogin}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
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
              <BtnFormSubmit
                disabled={errors.email || errors.password}
                type="submit"
              >
                Login
              </BtnFormSubmit>
            </FormAuth>
          )}
        </Formik>
        <TextLink>
          <span>Don't have an account? </span>
          <LinkToRegister to="/register">Register</LinkToRegister>
        </TextLink>
      </Wrapper>
    </FormContainer>
  );
};

export default LoginForm;
