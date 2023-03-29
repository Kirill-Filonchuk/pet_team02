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
    padding-top: 40px;
    padding-bottom: 40px;

    padding-left: ${p => (p.step === 1 ? '80px ' : '107px')};
    padding-right: ${p => (p.step === 1 ? '80px ' : '107px')};
    border-radius: ${theme.radii.normal};
    background-color: ${theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  ${theme.mq.desktop} {
    width: 100%;
    max-height: 100%;
  }
`;

const PetsPhoto = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 28px;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.manrope};
  font-size: ${theme.fontSizes[5] + `px`};
  line-height: ${theme.lineHeights[4]};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.04em;

  ${theme.mq.tablet} {
    margin-bottom: ${p => (p.step === 2 ? '20px' : '40px')};
    font-size: ${theme.fontSizes[8] + `px`};
    line-height: ${theme.lineHeights[3]};
    font-weight: ${theme.fontWeights.medium};
  }
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[8] + 'px'};
  }
`;

const WrapperStepOne = styled.div`
  & :nth-child(3) {
    margin-bottom: 0px;
  }
`;

const Label = styled.label`
  position: relative;

  font-size: ${theme.fontSizes[3] + 'px'};

  & :not(:last-child) {
    margin-bottom: 28px;
  }

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
    margin-top: 12px;
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
  margin-top: 20px;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[4] + 'px'};
  }
`;

const WrapperPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 208px;
  overflow: hidden;
  cursor: pointer;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: ${theme.colors.background};
  border: ${theme.borders.normal} ${theme.colors.borderActive};

  border-radius: ${theme.radii.normal};
  outline: none;
  transition: ${theme.transitions.durations.default}
    ${theme.transitions.functions.default};

  ${theme.mq.tablet} {
    width: 182px;
    height: 182px;
    margin-bottom: 40px;
  }
  /* ${theme.mq.desktop} {
  } */
`;

const LabelFile = styled.label`
  position: relative;
  /* cursor: pointer; */
  /* display: flex; */
  /* top:50%; */
  /* left:50% */
  /* transform: translate(-50%, -50%); */
`;

const Plus = styled(plus)`
  display: flex;
  /* position: absolute; */
  cursor: pointer;
  /* transform: translate(120%, 120%); */
`;

const InputFile = styled(Field)`
  position: relative;
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
  resize: none;

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
    width: 394px;
    height: 116px;
    margin-top: 12px;
    font-size: ${theme.fontSizes[2] + 'px'};
    line-height: ${theme.lineHeights[4]};
    padding-top: 16px;
    padding-left: 16px;
  }
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[3] + 'px'};
    line-height: ${theme.lineHeights[5]};
  }
`;

const WraperBtn = styled.div`
  ${theme.mq.tablet} {
    margin-top: 12px;
    display: flex;
    justify-content: space-around;
    /* gap: 20px; */
    height: 44px;
  }
  ${theme.mq.desktop} {
    margin-top: 12px;
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
  margin-top: 12px;
  font-size: ${theme.fontSizes[2] + `px`};
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
    width: 180px;
    height: 44px;
    margin-top: 0;
  }

  ${theme.mq.desktop} {
  }
`;

const ButtonBack = styled(BtnFormSubmit)`
  width: 100%;
  height: 40px;

  color: ${theme.colors.black};
  background-color: transparent;
  font-size: ${theme.fontSizes[2] + `px`};

  ${theme.mq.tablet} {
    width: 180px;
    height: 44px;
  }
`;

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
  PetsPhoto,
  WrapperStepOne,
};
