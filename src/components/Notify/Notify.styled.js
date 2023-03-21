import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const Card = styled('div')`
  padding: 40px 20px 20px 20px;

  position: absolute;

  left: ${p => p.loc.x}px;
  top: ${p => p.loc.y}px;
  transform: translate(
    ${p => (p.loc.hor === 'right' ? '-100%' : 0)},
    ${p => (p.loc.ver === 'bottom' ? '-100%' : 0)}
  );

  /* ${({ loc }) => {
    // if (loc.hor === 'left') {
    //   return css`
    //     left: ${p => p.loc.x}px;
    //   `;
    // }

    if (loc.hor === 'right') {
      return css`
        left: ${p => p.loc.x}px;
        transform: translateX(-100%);
      `;
    }

    // if (loc.ver === 'top') {
    //   return css`
    //     top: ${p => p.loc.y}px;
    //   `;
    // }

    if (loc.ver === 'bottom') {
      return css`
        top: ${p => p.loc.y}px;
        transform: translateY(-100%);
      `;
    }
  }} */

  /* top: ${p => p.loc.y}px;
  left: ${p => p.loc.x}px; */

  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};
  border-top-left-radius: 0;

  max-width: 450px;
  /* max-height: 100%; */

  ${theme.mq.mobileOnly} {
    padding: 40px 16px 16px 20px;
    width: 280px;

    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: ${p => p.theme.radii.small};
  }
`;

export const Wrapper = styled('div')`
  /* width: 100%; */
  height: 100%;
  font-size: 20px;
  line-height: 1.375;

  ${theme.mq.mobileOnly} {
    font-size: 16px;
  }
`;
