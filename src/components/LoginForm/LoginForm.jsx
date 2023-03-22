import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { validationLogin, InputError } from 'components/FormValidation';
import { BiShow, BiHide } from 'react-icons/bi';
import Container from 'components/Container';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderUser } from 'components/PetsData/PetsData.styled';
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
import useAuth from '../../hooks/useAuth/useAuth';

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
    ).then(res => {
      if (res.payload.status === 'success') {
        navigate('/user', { replace: true });
      }
    });
    actions.resetForm();
  };
  return (
    <Section>
      <Container>
        <Wrapper>
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
                  <LoaderUser>
                    <ThreeDots styles={{margin: '0 auto'}}
                    height="100"
                    width="100"
                    radius="9"
                    color={'rgb(245, 146, 86)'}
                  />
                  </LoaderUser>
                  
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
