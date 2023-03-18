import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

// import BgImage from "./img/bgMobile.svg"
//  background-image: url(${BgImage});

const Title = styled.h2`
  text-align: center;
  color: #111111;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.04em;
  margin: 100px 0 40px 0;
`;
const Wrapper = styled.div`
  padding: 0 20px;

  /* background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain; */
`;

const FormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  position: relative;
`;
const Input = styled(Field)`
  padding: 0 14px;
  box-sizing: border-box;
  min-width: 100%;
  height: 40px;
  outline: 1px solid rgba(245, 146, 86, 0.5);
  border: none;
  border-radius: 40px;
`;

const IconShow = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: grey;
`;

const BtnFormSubmit = styled.button`
  display: flex;
  height: 44px;
  border-radius: 40px;
  margin-top: 16px;
  margin-bottom: 40px;
  color: #fff;
  justify-content: center;
  align-items: center;
  border: 1px solid #f59256;
  background-color: #f59256;
`;

const TextLink = styled.p`
  text-align: center;
  margin: 0;
`;

const LinkToRegister = styled(Link)`
  color: rgba(48, 145, 235, 1);
`;
export {
  Wrapper,
  Title,
  FormAuth,
  Label,
  Input,
  IconShow,
  BtnFormSubmit,
  TextLink,
  LinkToRegister,
};
