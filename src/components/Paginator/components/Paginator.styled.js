import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const PagList = styled('ul')`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 3px;
`;

export const PagItem = styled('li')`
  width: 40px;
  height: 40px;

  ${theme.mq.tablet} {
    width: 50px;
    height: 50px;
  }
`;

export const PagButton = styled('button')`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  border-radius: 10px;

  border: none;
  background-color: transparent;

  ${({ type }) => {
    switch (type) {
      case 'arrow':
        return css`
          border: 2px solid ${p => p.theme.colors.accent};
        `;

      case 'current':
        return css`
          flex-shrink: 0;
          /* border: 2px solid ${p => p.theme.colors.accent}; */
          background-color: ${p => p.theme.colors.accent};
          color: ${p => p.theme.colors.white};
        `;

      default:
        break;
    }
  }}

  transition: background-color ${p => p.theme.transitions.default};
  transition-property: background-color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};

  &:hover {
    /* background-color: rgba(0, 0, 0, 0.02); */
    background-color: ${p =>
      p.type === 'current' ? p.theme.colors.accent : 'rgba(245, 146, 86, 0.2)'};
  }

  ${theme.mq.mobileOnly} {
    font-size: 13px;
  }
`;
