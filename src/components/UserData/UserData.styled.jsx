import styled from 'styled-components';
import { ReactComponent as EditIcon } from '../../images/camera-icon.svg';
import { theme } from 'theme';

export const UserTitle = styled.h2`
  margin-bottom: 18px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-family: ${p => p.theme.fonts.manrope};
  line-height: ${p => p.theme.lineHeights[2]};
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    font-family: ${p => p.theme.fonts.manrope};
    line-height: ${p => p.theme.lineHeights[3]};
    color: ${p => p.theme.colors.black};
  }
  ${theme.mq.desktop} {
    margin-bottom: 24px;
  }
`;

export const Wrapper = styled.div`
  /* width: 280px; */
  padding: 20px 12px 20px 16px;
  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${p => p.theme.radii.small};
  margin-bottom: 40px;

  ${theme.mq.tablet} {
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

  ${theme.mq.desktop} {
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
  ${theme.mq.tablet} {
    margin-bottom: auto;
  }
  /* ${theme.mq.desktop}  {
    flex-direction: row;
    align-items: flex-end;
  } */
`;

export const ImageWrapper = styled.div`
  width: 233px;
  height: 233px;
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: 12px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));

  overflow: hidden;
  ${theme.mq.tablet} {
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
  /* ${theme.mq.desktop}  {
    margin-left: 0;
    left: -5%;
  } */
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
  &:focus + button {
    color: ${p => p.theme.colors.accent};
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
  transition: color 250ms linear, transform 250ms linear; */

   /* ${theme.mq.desktop} {
    align-items:start;  
  } */
`;

export const EditImageIcon = styled(EditIcon)`
  width: 20px;
  height: 20px;

  margin-right: 4px;

  /* transition: rotate 250ms linear;

  &:hover,
  &:focus {
    transform: rotate(360deg);
  } */
`;

export const UserItemWrapper = styled.div`
  ${theme.mq.tablet} {
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
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights[4]};
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.grey};
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms linear, transform 250ms linear;
  &:hover,
  :focus {
    color: #f59256;
    transform: scale(1.1);
  }
  ${theme.mq.tablet} {
    align-self: start;
    margin-top: 33px;
    margin-left: 0;
  }
  ${theme.mq.desktop} {
    margin-top: 24px;
  }
`;

export const LogoutIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
