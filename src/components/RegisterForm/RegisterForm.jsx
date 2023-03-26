import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/operations';
import Spinner from 'components/Helpers/Spinner';
import { ToastContainer, Slide } from 'react-toastify';
import { notifyError } from 'components/Helpers/Toastify/Toastify';
import useAuth from 'hooks/useAuth/useAuth';
import { BiShow, BiHide } from 'react-icons/bi';
import Container from 'components/Container';
import {
  validationRegisterStepOne,
  validationRegisterStepTwo,
  InputError,
  InputCorrect,
} from 'components/FormValidation';

import {
  Title,
  Label,
  Input,
  IconShow,
  Section,
  Wrapper,
  BtnFormSubmit,
  TextLink,
  FormAuth,
} from 'components/LoginForm/LoginForm.styled';
import { ButtonBack, LinkToLogin } from './RegisterForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isPending } = useAuth();
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Section>
      <Container>
        <Wrapper>
          <ToastContainer transition={Slide} />
          <Title>Registration</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={
              step === 1 ? validationRegisterStepOne : validationRegisterStepTwo
            }
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values }) => (
              <FormAuth>
                {step === 1 && (
                  <>
                    <Label>
                      <Input
                        className={
                          !errors.email && values.email !== ''
                            ? 'success'
                            : errors.email && values.email !== ''
                            ? 'error'
                            : 'default'
                        }
                        autoComplete="off"
                        type="text"
                        name="email"
                        placeholder="Email"
                      />
                      {!errors.email && values.email !== '' ? (
                        <InputCorrect name="Email is correct" />
                      ) : null}

                      <InputError name="email" />
                    </Label>

                    <Label>
                      <Input
                        className={
                          !errors.password && values.password !== ''
                            ? 'success'
                            : errors.password && values.password !== ''
                            ? 'error'
                            : 'default'
                        }
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                      />
                      <IconShow onClick={togglePassword}>
                        {showPassword ? (
                          <BiHide size={24} />
                        ) : (
                          <BiShow size={24} />
                        )}
                      </IconShow>
                      {!errors.password && values.password !== '' ? (
                        <InputCorrect name="Password is correct" />
                      ) : null}
                      <InputError name="password" />
                    </Label>

                    <Label>
                      <Input
                        className={
                          !errors.confirmPassword &&
                          values.confirmPassword !== ''
                            ? 'success'
                            : errors.confirmPassword &&
                              values.confirmPassword !== ''
                            ? 'error'
                            : 'default'
                        }
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
                      {!errors.confirmPassword &&
                      values.confirmPassword !== '' ? (
                        <InputCorrect name="Password confirmed" />
                      ) : null}
                      <InputError name="confirmPassword" />
                    </Label>
                    {isPending ? (
                      <Spinner />
                    ) : (
                      <BtnFormSubmit
                        disabled={
                          errors.email ||
                          errors.password ||
                          errors.confirmPassword
                        }
                        type="submit"
                        onClick={
                          values.email !== '' &&
                          values.password !== '' &&
                          values.confirmPassword !== ''
                            ? nextStep
                            : null
                        }
                      >
                        Next
                      </BtnFormSubmit>
                    )}
                  </>
                )}

                {step === 2 && (
                  <>
                    <Label>
                      <Input
                        className={
                          !errors.name && values.name !== ''
                            ? 'success'
                            : errors.name && values.name !== ''
                            ? 'error'
                            : 'default'
                        }
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      {!errors.name && values.name !== '' ? (
                        <InputCorrect name="Name is correct" />
                      ) : null}
                      <InputError name="name" />
                    </Label>
                    <Label>
                      <Input
                        className={
                          !errors.city && values.city !== ''
                            ? 'success'
                            : errors.city && values.city !== ''
                            ? 'error'
                            : 'default'
                        }
                        type="text"
                        name="city"
                        placeholder="City, region (*value is optional)"
                        autoComplete="off"
                      />
                      {!errors.city && values.city !== '' ? (
                        <InputCorrect name="Location is correct" />
                      ) : null}
                      <InputError name="city" />
                    </Label>
                    <Label>
                      <Input
                        className={
                          !errors.phone && values.phone !== ''
                            ? 'success'
                            : errors.phone && values.phone !== ''
                            ? 'error'
                            : 'default'
                        }
                        type="text"
                        name="phone"
                        placeholder="Mobile phone (*value is optional)"
                        autoComplete="off"
                      />
                      {!errors.phone && values.phone !== '' ? (
                        <InputCorrect name="Phone is correct" />
                      ) : null}
                      <InputError name="phone" />
                    </Label>

                    <ButtonBack type="button" onClick={prevStep}>
                      Back
                    </ButtonBack>
                    {isPending ? (
                      <Spinner />
                    ) : (
                      <BtnFormSubmit
                        disabled={errors.name || errors.city || errors.phone}
                        type="submit"
                      >
                        Register
                      </BtnFormSubmit>
                    )}
                  </>
                )}
              </FormAuth>
            )}
          </Formik>
          <TextLink>
            <span>Already have an account? </span>
            <LinkToLogin to="/login">Login</LinkToLogin>
          </TextLink>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default RegisterForm;
