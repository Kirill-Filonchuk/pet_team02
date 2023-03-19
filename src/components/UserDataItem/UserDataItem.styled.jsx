import { Field } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Logo } from './edit-icon.svg';
import { ReactComponent as LogoDis } from './edit-icon-dis.svg';
import { ReactComponent as LogoDone } from './done-icon.svg';

export const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  height: 24px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 15px;
  }
  @media (min-width: 1280px) {
    width: 100%;
  }
`;

export const FieldText = styled.p`
  font-weight: 500;
  width: 56px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  letter-spacing: 0.04em;
  color: #111111;
  @media (min-width: 768px) {
    width: 83px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const StyledValue = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  margin-left: 19px;
  color: #111111;
  /* position: relative; */

  @media (min-width: 768px) {
    margin-left: 26px;
    font-size: 18px;
    line-height: 25px;
    width: 250px;
  }
`;

export const StyledInput = styled(Field)`
  margin-left: 0;
  width: 160px;
  height: 24px;
  padding: 4px 18px;
  color: #111111;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  outline: none;
  letter-spacing: 0.04em;
  /* position: relative; */

  &:hover,
  :focus {
    outline: 1px solid rgba(245, 146, 86, 0.5);
  }
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-left: 13px;
    width: 216px;
    height: 32px;
    padding: 4px 12px;
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: #fdf7f2;
  margin-left: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
  color: #f59256;
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
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const BtnImage = styled(Logo)`
  width: 12.5px;
  height: 12.5px;
  transition: transform 250ms linear;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const BtnImageDis = styled(LogoDis)`
  width: 12.5px;
  height: 12.5px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const BtnImageDone = styled(LogoDone)`
  width: 12.5px;
  height: 12.5px;
  fill: #f59256;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
