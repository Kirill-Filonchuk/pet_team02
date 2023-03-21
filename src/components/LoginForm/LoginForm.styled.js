import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const Title = styled.h2`
  text-align: center;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.manrope};
  font-size: ${theme.fontSizes[5] + `px`};
  line-height: ${theme.lineHeights[4]};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  ${theme.mq.tablet} {
  font-size: ${theme.fontSizes[7] + `px`};
  line-height: ${theme.lineHeights[3]};
  font-weight: ${theme.fontWeights.medium};
  }
`;
const Wrapper = styled.div`
  padding: 0 20px;
  ${theme.mq.tablet} {
    padding: 60px 80px;
    margin: 150px 80px 0 80px;
    border-radius: ${theme.radii.normal};
    background-color: ${theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  ${theme.mq.desktop} {
    margin: 140px 330px 0 330px;
  }
`;

const FormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 24px;
  ${theme.mq.tablet} {
    margin-bottom: 40px;
  }
`;
const Input = styled(Field)`
  padding: 0 14px;
  min-width: 100%;
  background-color: ${theme.colors.background};
  height: 40px;
  border: ${theme.borders.normal} ${theme.colors.borderActive};
  font-size: ${theme.fontSizes[1]+'px'};
  line-height: ${theme.lineHeights[3]};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.grey};
  border-radius: ${theme.radii.normal};
  ${theme.mq.tablet}{
    height: 52px;
    font-size: ${theme.fontSizes[2]+'px'};
    line-height: ${theme.lineHeights[4]};
    padding: 0 22px;
  }
  ${theme.mq.desktop} {
    padding: 0 32px;
    font-size: ${theme.fontSizes[3]+'px'};
    line-height: ${theme.lineHeights[5]};
  }
`;

const IconShow = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: ${theme.colors.grey};
  ${theme.mq.tablet} {
    width: 35px;
    height: 35px;
  }
  &>svg {
    width: 24px;
    height: 24px;
    ${theme.mq.tablet} {
    width: 35px;
    height: 35px;
  }
  }
  
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
  ${theme.mq.tablet} {
    margin-top: 0;
  }
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
