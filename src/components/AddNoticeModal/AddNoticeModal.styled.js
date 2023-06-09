import styled from 'styled-components';
import maleIcon from 'assets/images/male-icon.png';
import femaleIcon from 'assets/images/female-icon.png';
import { theme } from 'theme';
import { Button } from 'components/UIKit/Button/Button.styled';
import { RxPlus } from 'react-icons/rx';
import { Field, Form } from 'formik';

export const FieldLabel = styled('p')`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.44;

  ${theme.mq.tablet} {
    font-size: 24px;
    line-height: 1.08;
  }
`;

export const AddPetWrapper = styled('div')`
  width: 280px;
  padding: 40px 18px;

  ${theme.mq.tablet} {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const StyledForm = styled(Form)``;

export const Title = styled('h1')`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 24px;
  text-align: center;

  ${theme.mq.tablet} {
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: 36px;
  }
`;

export const Description = styled('p')`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.68;
  text-align: center;
  letter-spacing: -0.01em;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
    font-size: 20px;
  }
`;

export const CategoryList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;

  ${theme.mq.tablet} {
    column-gap: 12px;
    row-gap: 16px;
  }
`;

export const CategoryItem = styled('li')``;

export const CategoryLabel = styled('label')`
  display: block;
  cursor: pointer;
  padding: 6px 26px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 14px;
  letter-spacing: 0.04em;

  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  ${theme.mq.tablet} {
    padding: 8px 26px;
    font-size: 20px;
  }
`;

export const CategoryRadio = styled(Field)`
  &:checked + label {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FieldsFirstStep = styled('div')`
  margin-bottom: 40px;
  margin-top: 32px;

  ${theme.mq.tablet} {
    margin-top: 28px;
  }
`;

export const Label = styled('label')`
  display: block;
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.44;

  &:last-child {
    margin-bottom: 0;
  }

  ${theme.mq.tablet} {
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 1.08;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 11px 14px;
  margin-top: 8px;

  font-size: 14px;
  color: rgba(17, 17, 17, 0.6);

  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};

  ${theme.mq.tablet} {
    margin-top: 12px;
    font-size: 16px;
    line-height: 1.625;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${p => p.theme.colors.accentActive};
  }
`;

export const ToolBar = styled('div')`
  ${theme.mq.tablet} {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 20px;
  }
`;

export const ModalButton = styled(Button)`
  margin-bottom: 12px;
  padding-top: 9px;
  padding-bottom: 9px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  letter-spacing: 0.04em;

  ${theme.mq.tablet} {
    margin-bottom: 0;
    font-size: 20px;
  }
`;

export const NextButton = styled(ModalButton)`
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};

  &:hover {
    background-color: ${p => p.theme.colors.accentActive};
  }
`;

export const BackButton = styled(ModalButton)`
  color: ${p => p.theme.colors.black};
`;

//----------------------------------------STEP 2------------------------------------

export const SexWrapper = styled('div')``;

export const SexTitle = styled(FieldLabel)`
  margin-bottom: 16px;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
  }
`;

export const SexList = styled('ul')`
  display: flex;
  column-gap: 40px;

  ${theme.mq.tablet} {
    column-gap: 80px;
  }
`;

export const SexItem = styled('li')``;

export const SexRadio = styled(Field)`
  &:checked + label {
    color: ${p => p.theme.colors.accent};
  }
`;

export const SexLabel = styled('label')`
  position: relative;
  display: block;
  cursor: pointer;
  padding-top: 50px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.44;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;

    background-image: url(${p => (p.isMale ? maleIcon : femaleIcon)});
    background-repeat: no-repeat;
    background-position: center;

    ${theme.mq.tablet} {
      width: 54px;
      height: 54px;
    }
  }

  ${theme.mq.tablet} {
    padding-top: 76px;
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const FieldsSecondStep = styled('div')`
  margin-bottom: 16px;
  margin-top: 32px;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
    margin-top: 40px;
  }
`;

export const UploadWrapper = styled('div')`
  margin-bottom: 20px;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
  }
`;

export const UploadDescription = styled(FieldLabel)`
  margin-bottom: 8px;

  ${theme.mq.tablet} {
    margin-bottom: 12px;
  }
`;

export const UploadLabel = styled('label')`
  position: relative;
  display: block;
  cursor: pointer;

  overflow: hidden;

  width: 116px;
  height: 116px;

  border-radius: 20px;
  background-color: ${p => p.theme.colors.background};

  ${theme.mq.tablet} {
    width: 140px;
    height: 140px;
  }

  color: rgba(17, 17, 17, 0.6);

  transition-property: color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};
  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const UploadIconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 71px;
  height: 71px;
`;

export const UploadImageWrapper = styled('div')`
  width: 100%;
  height: 100%;
`;

export const UploadImage = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadIcon = styled(RxPlus)`
  width: 100%;
  height: 100%;
`;

export const UploadInput = styled(Field)``;

export const CommentWrapper = styled('div')`
  margin-bottom: 40px;
`;

export const CommentDecription = styled(FieldLabel)`
  margin-bottom: 8px;

  ${theme.mq.tablet} {
    margin-bottom: 12px;
  }
`;

export const CommentsFieldContainer = styled('div')`
  height: ${p => p.height} ${theme.mq.tablet} {

  }
`;

export const CommentsField = styled('textarea')`
  resize: vertical;
  margin: 0;
  padding: 11px 14px;

  width: 100%;
  min-height: 40px;

  font-size: 14px;
  color: rgba(27, 27, 27, 0.6);

  border: 1px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.background};

  ${theme.mq.tablet} {
    padding: 16px 18px;
    min-height: 113px;
    font-size: 16px;
    line-height: 1.625;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${p => p.theme.colors.accentActive};
  }
`;

export const ErrorWrapper = styled('ul')`
  margin-top: 20px;

  color: red;

  & > li {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ErrorItem = styled('p')`
  margin-top: 10px;
  color: red;
  padding-left: 20px;
  font-size: 14px;
`;
