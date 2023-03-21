import styled, { css } from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { theme } from 'theme';

export const AddButtonStyled = styled('button')`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  column-gap: 12px;

  background-color: transparent;

  ${theme.mq.mobileOnly} {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        position: fixed;
        bottom: 200px;
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
`;

export const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};

  ${theme.mq.mobileOnly} {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        background-color: transparent;
        width: 32px;
        height: 32px;
      `}
  }

  ${theme.mq.tablet} {
    transition-property: background-color;
    transition-duration: ${p => p.theme.transitions.durations.default};
    transition-timing-function: ${p => p.theme.transitions.functions.default};
    &:hover {
      background-color: ${p => p.theme.colors.accentActive};
    }
  }
`;

export const IconContainer = styled('div')`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};

  ${theme.mq.mobileOnly} {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        width: 32px;
        height: 32px;
      `}
  }
`;

export const PlusIcon = styled(BsPlusLg)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const AddButtonText = styled('span')`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.35;
  color: ${p => p.theme.colors.black};

  ${theme.mq.mobileOnly} {
    ${({ hasMobileStyles }) =>
      hasMobileStyles &&
      css`
        font-size: 12px;
        line-height: 1.333;
        color: ${p => p.theme.colors.white};
      `}
  }
`;
