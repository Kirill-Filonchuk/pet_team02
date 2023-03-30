import { Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/userData/edit-icon.svg';
import { ReactComponent as LogoDis } from '../../images/userData/edit-icon-dis.svg';
import { ReactComponent as LogoDone } from '../../images/userData/done-icon.svg';
import { theme } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-bottom: 8px;
  ${theme.mq.tablet} {
    width: auto;

    height: 32px;
  }
  ${theme.mq.desktop} {
    width: 100%;
  }
`;

export const FieldText = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.manrope};
  width: 56px;
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 1.33;
  display: flex;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  ${theme.mq.tablet} {
    width: 83px;
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: 1.39;
  }
`;

export const StyledValue = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.manrope};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  word-break: break-all;
  padding: 4px 0 4px 24px;
  max-width: 160px;
  width: 100%;

  ${theme.mq.tablet} {
    margin-left: 24px;
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: 1.39;

    padding: 4px 0 4px 12px;
    max-width: 216px;
    width: 100%;
  }
`;

export const StyledInput = styled(Field)`
  margin-left: 0;
  width: 160px;

  padding: 4px 2px 4px 16px;
  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 1.33;
  outline: none;
  letter-spacing: 0.04em;

  margin-left: 7.2px;

  &:hover,
  :focus {
    outline: 1px solid rgba(245, 146, 86, 0.5);
  }
  ${theme.mq.tablet} {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: 1.39;
    margin-left: 23.2px;
    max-width: 216px;
    width: 100%;

    padding: 4px 0 4px 12px;
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.background};
  margin-left: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  color: ${p => p.theme.colors.accent};
  transition: background-color 250ms linear, border 250ms linear;
  &:hover,
  :focus {
    background-color: ${({ isDisabled }) => (isDisabled ? '' : '#ffffff')};
    border: ${({ isDisabled }) => (isDisabled ? '' : '0.5px solid #f59256')};
  }

  &:hover svg,
  :focus svg {
    transform: ${({ isDisabled }) => (isDisabled ? '' : 'scale(1.1)')};
  }
  ${theme.mq.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const BtnImage = styled(Logo)`
  width: 12.5px;
  height: 12.5px;
  transition: transform 250ms linear;
  ${theme.mq.tablet} {
    width: 18px;
    height: 18px;
  }
`;

export const BtnImageDis = styled(LogoDis)`
  width: 12.5px;
  height: 12.5px;

  ${theme.mq.tablet} {
    width: 18px;
    height: 18px;
  }
`;

export const BtnImageDone = styled(LogoDone)`
  width: 12.5px;
  height: 12.5px;
  fill: #f59256;
  ${theme.mq.tablet} {
    width: 18px;
    height: 18px;
  }
`;
