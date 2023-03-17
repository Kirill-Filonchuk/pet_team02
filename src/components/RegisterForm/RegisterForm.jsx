import { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { register } from "redux/auth/operations";
import { Formik } from 'formik';
import {
  validationRegisterStepOne,
  validationRegisterStepTwo,
  InputError,
} from 'components/FormValidation';
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
} from '../LoginForm/LoginForm.styled';

import Container from '../ContainerForm';
import { BiShow, BiHide } from 'react-icons/bi';

const RegisterForm = () => {
  // const navigate = useNavigate();
 // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    confirm_password: '',
    name: '',
    location: '',
    phone: '',
    
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm)
  }
  const handleSubmit = (values, actions, error) => {
    // const {email, password, confirm_password, name, location, phone, } = values;
    // if(password===confirm_password) {
    //   dispatch(
    //     register({
    //     email,
    //     password
    //     name,
    //     location,
    //     phone,
    //     
    //     })
    //   )
    // }
    console.log(values);
    actions.resetForm();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Registration</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationRegisterStepOne}
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
              <Label>
                <Input
                  name="confirm_password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  autoComplete="off"
                />
                <IconShow onClick={togglePasswordConfirm}>
                  {showPasswordConfirm ? <BiHide size={24} /> : <BiShow size={24} />}
                </IconShow>
                <InputError name="confirm_password" />
              </Label>
              <BtnFormSubmit type="submit">Next</BtnFormSubmit>
              <TextLink>
          <span>Don't have an account?</span>
          {/* <LinkToRegister to="/register">Register</LinkToRegister> */}
          <span> Login</span>
        </TextLink>
              <Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="off"
                />
                <InputError name="name" />
              </Label>
              <Label>
                <Input
                  name="location"
                  placeholder="City, region"
                  autoComplete="off"
                />
                <InputError name="location" />
              </Label>
              <Label>
                <Input
                  name="phone"
                  type="text"
                  placeholder="Mobile phone"
                  autoComplete="off"
                />
                <InputError name="phone" />
              </Label>
              <BtnFormSubmit type="submit">Register</BtnFormSubmit>
            </FormLogin>
          )}
        </Formik>
        <TextLink>
          <span>Don't have an account?</span>
          {/* <LinkToRegister to="/register">Register</LinkToRegister> */}
          <span> Login</span>
        </TextLink>
      </Wrapper>
    </Container>
  );
};

export default RegisterForm;
