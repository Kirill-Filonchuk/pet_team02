import styled from 'styled-components';
import { ReactComponent as EditIcon } from './camera-icon.svg';

export const UserTitle = styled.h2`
  margin-bottom: 18px;
  font-size: 20px;
  font-family: Manrope;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 38px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const Wrapper = styled.div`
  /* width: 280px; */
  padding: 20px 12px 20px 16px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    position: relative;
    /* left: -32px; */
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    padding: 24px 40px 24px 32px;
    border-radius: 0px 40px 40px 0px;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    position: relative;
    left: 0;
    flex-direction: column;
    width: 411px;
    padding: 20px 16px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;
  @media (min-width: 768px) {
    margin-bottom: auto;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const ImageWrapper = styled.div`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  margin-bottom: 12px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));

  overflow: hidden;
  @media (min-width: 768px) {
    margin-bottom: auto;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-left: auto;
  @media (min-width: 1280px) {
    margin-left: 0;
    left: -5%;
  }
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover + button,
  focus + button {
    color: #f59256;
  }
  &::-webkit-file-upload-button {
    cursor: pointer;
  }
`;

export const EditImageBtn = styled.button`
  display: flex;
  align-items: center;
  color: #111111;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  margin-right: 12px;
  background-color: transparent;
  border: none;
  /* transition: color 250ms linear, transform 250ms linear; */

  transition: color 250ms linear, transform 250ms linear;
  &:hover,
  :focus {
    color: #f59256;
    transform: scale(1.1);
  }
  */ @media (min-width: 1280px) {
    /* align-items:start;  */
  }
`;

export const EditImageIcon = styled(EditIcon)`
  width: 20px;
  height: 20px;

  margin-right: 4px;
`;

export const UserItemWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const LogoutBtn = styled.button`
  padding: 0;
  margin-top: 42px;
  display: flex;
  align-items: center;
  border: none;
  margin-left: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms linear, transform 250ms linear;
  &:hover,
  :focus {
    color: #f59256;
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    align-self: start;
    margin-top: 33px;
    margin-left: 0;
  }
  @media (min-width: 1280px) {
    margin-top: 24px;
  }
`;

export const LogoutIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
