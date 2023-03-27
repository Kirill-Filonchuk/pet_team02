import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

import bg_mobile from '../../images/authForm/bg_mobile_vector.svg';
import bg_tablet from '../../images/authForm/bg_tablet_vector.svg';
import bg_desktop from '../../images/authForm/bg_desktop_vector.svg';

const Section = styled.section`
position: absolute;
z-index: -1;
display: flex;
align-items: center;
left: 0; 
right: 0;
top: 0;
height: 100%;
background-image: url(${bg_mobile});
background-repeat: no-repeat;
background-size: contain;
overflow-y: hidden;
background-position: bottom;
${theme.mq.tablet} {
  background-image: url(${bg_tablet});
}
${theme.mq.desktop} {
  background-image: url(${bg_desktop});
}
`

const Wrapper = styled.div`
  ${theme.mq.tablet} {
    margin: 0 auto;
    padding: 60px 80px;
    margin: 0 48px;
    border-radius: ${theme.radii.normal};
    background-color: ${theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  ${theme.mq.desktop} {
    margin: 0 315px;
  }
`;

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
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[8]+'px'};
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
  font-size: ${theme.fontSizes[1] + 'px'};
  line-height: ${theme.lineHeights[3]};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.grey};
  border-radius: ${theme.radii.normal};
  outline: none;
  transition: ${theme.transitions.durations.default} ${theme.transitions.functions.default};
  &.default {
  border: ${theme.borders.normal} ${theme.colors.borderActive};
  }
  &.success {
    border-color: green;
  }
  &.error {
    border-color: red
  }
  ${theme.mq.tablet} {
    height: 52px;
    font-size: ${theme.fontSizes[2] + 'px'};
    font-size: ${theme.fontSizes[1] + 'px'};
    line-height: ${theme.lineHeights[4]};
    padding: 0 22px;
  }
  ${theme.mq.desktop} {
    padding: 0 32px;
    font-size: ${theme.fontSizes[3] + 'px'};
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
  cursor: pointer;
  transition: ${theme.transitions.durations.default} ${theme.transitions.functions.default};
  ${theme.mq.tablet} {
    width: 30px;
    height: 30px;
  }
  & > svg {
    width: 24px;
    height: 24px;
    &:hover {
      transform: scale(1.02);
      color: ${theme.colors.greyHover};
    }
    ${theme.mq.tablet} {
      width: 30px;
      height: 30px;
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
  transition: ${theme.transitions.durations.default} ${theme.transitions.functions.default};
  cursor: pointer;
  
  &:hover:not(:disabled), &:focus:not(:disabled) {
    box-shadow: 0 0 20px ${theme.colors.accent}
  }

  &:active &:not(:disabled) {
    transform: scale(1.01);
  }
  &:disabled {
    background-color: ${theme.colors.borderActive};
    border: none;
    cursor: default;
  }
  ${theme.mq.tablet} {
    margin-top: 0;
  }
  ${theme.mq.desktop} {
    height: 48px;
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
  Section,
  Title,
  FormAuth,
  Label,
  Input,
  IconShow,
  BtnFormSubmit,
  TextLink,
  LinkToRegister,
  Wrapper
};
