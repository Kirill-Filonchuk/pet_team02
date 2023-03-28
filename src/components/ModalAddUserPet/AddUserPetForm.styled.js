import styled from 'styled-components';
import { Field } from 'formik';
import { theme } from '../../theme';
import { ReactComponent as plus } from '../../images/pet/plus.svg';

const Section = styled.section`
  width: 100%;
  max-height: 100wh;

  ${theme.mq.tablet} {
    width: 608px;
    max-height: 662px;
  }
  ${theme.mq.desktop} {
    width: 100%;
    max-height: 100%;
  } ;
`;

const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 40px 20px;

  ${theme.mq.tablet} {
    width: 100%;
    padding: 40px 107px;
    border-radius: ${theme.radii.normal};
    background-color: ${theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  ${theme.mq.desktop} {
    width: 100%;
    max-height: 100%;
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

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[7] + `px`};
    line-height: ${theme.lineHeights[3]};
    font-weight: ${theme.fontWeights.medium};
  }
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[8] + 'px'};
  }
`;

const Label = styled.label`
  margin-top: 28px;
  font-size: ${theme.fontSizes[3] + 'px'};
  ${theme.mq.tablet} {
    margin-top: 40px;
    font-size: ${theme.fontSizes[5] + 'px'};
  }
`;

const Input = styled(Field)`
  padding: 11px 14px;
  min-width: 100%;
  margin-top: 8px;
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
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};

  &.default {
    border: ${theme.borders.normal} ${theme.colors.borderActive};
  }
  &.success {
    border-color: green;
  }
  &.error {
    border-color: red;
  }

  ${theme.mq.tablet} {
    height: 48px;
    font-size: ${theme.fontSizes[2] + 'px'};
    line-height: ${theme.lineHeights[4]};
    padding: 11 16px;
  }
  ${theme.mq.desktop} {
    padding: 0 32px;
    font-size: ${theme.fontSizes[3] + 'px'};
    line-height: ${theme.lineHeights[5]};
  }
`;

const TextFile = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes[1] + 'px'};
  margin-top: 28px;
  font-size: ${theme.fontSizes[2] + 'px'};
  ${theme.mq.tablet} {
    margin-top: 40px;
    font-size: ${theme.fontSizes[5] + 'px'};
  }
`;
const WrapperPhoto = styled.div`
 position: relative;
  width: 208px;
  height: 208px;
  padding: 11px 14px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;

  background-color: ${theme.colors.background};
  border: ${theme.borders.normal} ${theme.colors.borderActive};

  border-radius: ${theme.radii.normal};
  outline: none;
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};
  ${theme.mq.tablet} {
    width: 182px;
    height: 182px;
  }
  ${theme.mq.desktop} {
  }
`

const LabelFile = styled.label`
  /* position: relative;
  width: 208px;
  height: 208px;
  padding: 11px 14px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;

  background-color: ${theme.colors.background};
  border: ${theme.borders.normal} ${theme.colors.borderActive};

  border-radius: ${theme.radii.normal};
  outline: none;
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};
  ${theme.mq.tablet} {
    width: 182px;
    height: 182px;
  }
  ${theme.mq.desktop} {
  } */
`;

const Plus = styled(plus)`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputFile = styled(Field)`
  display: none;
  width: 208px;
  height: 208px;
  padding: 11px 14px;

  margin-top: 8px;

  background-color: ${theme.colors.background};

  border: ${theme.borders.normal} ${theme.colors.borderActive};
  font-size: ${theme.fontSizes[1] + 'px'};
  line-height: ${theme.lineHeights[3]};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.grey};
  border-radius: ${theme.radii.normal};
  outline: none;
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};
    &.default {
    border: ${theme.borders.normal} ${theme.colors.borderActive};
  }
  &.success {
    border-color: green;
  }
  &.error {
    border-color: red;
  }
  ${theme.mq.tablet} {
    width: 182px;
    height: 182px;

    font-size: ${theme.fontSizes[2] + 'px'};
    line-height: ${theme.lineHeights[4]};
    padding: 11 16px;
  }
  ${theme.mq.desktop} {
    padding: 0 32px;
    font-size: ${theme.fontSizes[3] + 'px'};
    line-height: ${theme.lineHeights[5]};
  }
`;

const Textarea = styled(Field)`
  padding: 12px 14px;
  margin-top: 8px;
  min-width: 100%;
  height: 100px;

  border: ${theme.borders.normal} ${theme.colors.borderActive};
  font-size: ${theme.fontSizes[1] + 'px'};
  line-height: ${theme.lineHeights[3]};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  background-color: ${theme.colors.background};
  color: ${theme.colors.grey};
  border-radius: ${theme.radii.small};
  outline: none;
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};

  &.default {
    border: ${theme.borders.normal} ${theme.colors.borderActive};
  }
  &.success {
    border-color: green;
  }
  &.error {
    border-color: red;
  }
  ${theme.mq.tablet} {
    height: 116px;
    font-size: ${theme.fontSizes[2] + 'px'};
    line-height: ${theme.lineHeights[4]};
    padding-top: 16px;
    padding-left: 16px;
  }
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[3] + 'px'};
    line-height: ${theme.lineHeights[5]};
  }

  ::placeholder {
    transform: translate(0px, -35px);
  }
`;

const WraperBtn = styled.div`
  ${theme.mq.tablet} {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    height: 44px;
  }
`;

const BtnFormSubmit = styled.button`
  width: 100%;
  height: 40px;
  border-radius: ${theme.radii.normal};
  margin-top: 40px;
  font-size: ${theme.fontSizes[3] + `px`};
  line-height: ${theme.lineHeights[2]};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  justify-content: center;
  align-items: center;
  border: ${theme.borders.medium} ${theme.colors.borderActive};
  background-color: ${theme.colors.accent};
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: 0 0 20px ${theme.colors.accent};
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
  }
  ${theme.mq.desktop} {
    height: 48px;
  }
`;

const ButtonBack = styled(BtnFormSubmit)`
  width: 100%;
  margin-top: 12px;
  height: 40px;
  color: ${theme.colors.black};
  background-color: transparent;
  font-size: ${theme.fontSizes[3] + `px`};
  ${theme.mq.desktop} {
    height: 48px;
  }
`;

// const LinkToLogin = styled(NavLink)`
//   color: ${theme.colors.blueLinks};
//   text-decoration: underline;
// `;

export {
  Title,
  Label,
  Input,
  Wrapper,
  Section,
  Textarea,
  InputFile,
  LabelFile,
  TextFile,
  Plus,
  ButtonBack,
  BtnFormSubmit,
  WraperBtn,
  WrapperPhoto,
};

// ====================================++++++++++++++++++++++++++++++===
// import styled from 'styled-components';
// import { BtnFormSubmit } from 'components/LoginForm/LoginForm.styled';
// import { NavLink } from 'react-router-dom';
// import { theme } from '../../../src/theme';
// const ButtonBack = styled(BtnFormSubmit)`
//   width: 100%;
//   margin-top: 0;
//   margin-bottom: 40px;
//   color: ${theme.colors.black};
//   background-color: transparent;
// `;
// const ButtonRegister = styled(BtnFormSubmit)`
//   margin-top: 4px;
//   margin-bottom: 12px;
// `;
// const LinkToLogin = styled(NavLink)`
//   color: ${theme.colors.blueLinks};
//   text-decoration: underline;
// `;
// export { ButtonBack, LinkToLogin, ButtonRegister };
