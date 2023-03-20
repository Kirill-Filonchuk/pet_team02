import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

// import BgImage from "./img/bgMobile.svg"
//  background-image: url(${BgImage});

const Title = styled.h2`
  text-align: center;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.manrope};
  font-size: ${theme.fontSizes[5] + `px`};
  line-height: ${theme.lineHeights[4]};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.04em;
  margin-bottom: 40px;
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
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 24px;
`;
const Input = styled(Field)`
  padding: 0 14px;
  min-width: 100%;
  height: 40px;
  border: ${theme.borders.normal} ${theme.colors.borderActive};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.grey};
  border-radius: ${theme.radii.normal};
`;

const IconShow = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: ${theme.colors.grey};
`;

const BtnFormSubmit = styled.button`
  display: flex;
  height: 44px;
  border-radius: ${theme.radii.normal};
  margin-top: 16px;
  font-size: ${theme.fontSizes[4] + `px`};
  line-height: ${theme.lineHeights[2]};
  margin-bottom: 40px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  justify-content: center;
  align-items: center;
  border: ${theme.borders.medium} ${theme.colors.borderActive};
  background-color: ${theme.colors.accent};
`;

const TextLink = styled.p`
  color: ${theme.colors.grey};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  text-align: center;
  font-size: ${theme.fontSizes[0] + `px`};
  line-height: ${theme.lineHeights[2]};
  letter-spacing: 0.04em;
  margin: 0;
`;

const LinkToRegister = styled(Link)`
  color: ${theme.colors.blueLinks};
  text-decoration: underline;
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
