import styled, { css } from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

export const AddButtonStyled = styled('button')`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;

  /* position: static; */
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  /* flex-shrink: 0; */
  column-gap: 12px;

  width: auto;
  /* width: 100%; */
  height: auto;
  transform: translateY(0);

  background-color: transparent;

  @media screen and (max-width: calc(768px - 0.02px)) {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        position: fixed;
        bottom: 20%;
        right: 20px;
        transform: translateY(+50%);
        z-index: 999;
        width: 80px;
        height: 80px;

        flex-direction: column;
        justify-content: center;

        background-color: #f59256;
        border-radius: 50%;
        box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
      `}
  }

  /* @media screen and (min-width: 768px) {
  } */
`;

export const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-shrink: 0; */

  width: 44px;
  height: 44px;

  background-color: #f59256;
  border-radius: 50%;

  @media screen and (max-width: calc(768px - 0.02px)) {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        background-color: transparent;
        width: 32px;
        height: 32px;
      `}
  }

  /* @media screen and (min-width: 768px) {
  } */
`;

export const PlusIcon = styled(BsPlusLg)`
  display: block;
  width: 24px;
  height: 24px;
  color: #ffffff;

  @media screen and (max-width: calc(768px - 0.02px)) {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        width: 32px;
        height: 32px;
      `}
  }
  /* 
  @media screen and (min-width: 768px) {
  } */
`;

export const AddButtonText = styled('span')`
  /* flex-shrink: 0; */
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: #111111;

  @media screen and (max-width: calc(768px - 0.02px)) {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        font-size: 12px;
        line-height: 1.333;
        color: #ffffff;
      `}
  }

  /* @media screen and (min-width: 768px) {
  } */
`;

// export const AddButtonStyledForNotices = styled(AddButton)`
//   align-self: flex-start;

//   & > .AddButtonIconWrapper {}
// `;
