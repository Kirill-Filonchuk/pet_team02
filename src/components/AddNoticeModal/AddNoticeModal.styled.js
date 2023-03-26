import styled from 'styled-components';
import { theme } from 'theme';
import { Button } from 'components/UIKit/Button/Button.styled';
import maleIcon from 'assets/images/male-icon.png';
import femaleIcon from 'assets/images/female-icon.png';
import { Field } from 'formik';

export const AddPetWrapper = styled('div')`
  width: 280px;
  padding: 40px 18px;

  ${theme.mq.tablet} {
    width: 608px;
    padding: 40px 80px;
  }
`;

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
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.01em;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
    font-size: 20px;
  }
`;

export const CategoryList = styled('ul')`
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
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

export const CategoryRadio = styled('input')`
  &:checked + label {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const Fields = styled('div')`
  margin-bottom: 40px;
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

export const Input = styled('input')`
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

export const TextArea = styled('input')`
  width: 100%;
  padding: 11px 14px;
  margin-top: 8px;

  min-height: 40px;

  font-size: 14px;
  color: rgba(17, 17, 17, 0.6);

  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};

  ${theme.mq.tablet} {
    min-height: 113px;
    width: 448px;

    margin-top: 12px;
    font-size: 16px;
    line-height: 1.625;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${p => p.theme.colors.accentActive};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-left: auto;

  flex-direction: column;

  cursor: pointer;
  padding-top: 50px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.44;

  &::before {
    content: '';

    width: 40px;
    height: 40px;

    background-color: green;
    /* background-image: ${p => p.theme.colors.background}; */
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

export const PetsFotoLabel = styled('label')`
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

// export const InputPetsFoto = styled(Field)`
//   margin-left: 0 auto;
//   /* opacity: 0; */
//   width: 116px;
//   height: 116px;
//   cursor: pointer;

//   &:hover + button,
//   &:focus + button {
//     color: ${p => p.theme.colors.accent};
//   }

//   &::-webkit-file-upload-button {
//     cursor: pointer;
//   }
// `;

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

export const SexWrapper = styled('div')``;

export const SexTitle = styled('p')`
  margin-bottom: 16px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: 1.44;

  ${theme.mq.tablet} {
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 1.08;
  }
`;

export const SexList = styled('ul')`
  margin-bottom: 32px;
  display: flex;
  column-gap: 40px;

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    column-gap: 80px;
  }
`;

export const SexItem = styled('li')``;

export const SexRadio = styled('input')`
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

    /* background-color: black; */
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
