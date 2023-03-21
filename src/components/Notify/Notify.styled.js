import styled from 'styled-components';
import { theme } from 'theme';

// export const Card = styled('div')`
//   padding: 40px 20px 20px 20px;

//   position: absolute;

//   left: ${p => p.loc.x}px;
//   top: ${p => p.loc.y}px;
//   transform: translate(
//     ${p => (p.loc.hor === 'right' ? '-100%' : 0)},
//     ${p => (p.loc.ver === 'bottom' ? '-100%' : 0)}
//   );

//   background-color: ${p => p.theme.colors.white};
//   border: 2px solid ${p => p.theme.colors.accent};
//   /* border-radius: ${p => p.theme.radii.small}; */
//   border-top-left-radius: ${({ loc }) =>
//     loc.hor === 'left' && loc.ver === 'top' ? 0 : '20px'};

//   border-top-right-radius: ${({ loc }) =>
//     loc.hor === 'right' && loc.ver === 'top' ? 0 : '20px'};

//   border-bottom-left-radius: ${({ loc }) =>
//     loc.hor === 'left' && loc.ver === 'bottom' ? 0 : '20px'};

//   border-bottom-right-radius: ${({ loc }) =>
//     loc.hor === 'right' && loc.ver === 'bottom' ? 0 : '20px'};

//   min-height: 150px;
//   min-width: 200px;
//   max-width: 450px;

//   ${theme.mq.mobileOnly} {
//     padding: 40px 16px 16px 20px;
//     width: 280px;

//     top: 0;
//     left: 50%;
//     transform: translate(-50%, 0);
//     border-radius: ${p => p.theme.radii.small};
//   }
// `;

export const Card = styled('div').attrs(p => ({
  style: {
    left: p.freqProps.left,
    top: p.freqProps.top,
    transform: `translate(${p.freqProps.transformX}, ${p.freqProps.transformY})`,
    borderRadius: `${p.freqProps.borderTL} ${p.freqProps.borderTR} ${p.freqProps.borderBR} ${p.freqProps.borderBL}`,
  },
}))`
  padding: 40px 20px 20px 20px;

  position: absolute;

  /* left: ${p => p.loc.x}px;
  top: ${p => p.loc.y}px;
  transform: translate(
    ${p => (p.loc.hor === 'right' ? '-100%' : 0)},
    ${p => (p.loc.ver === 'bottom' ? '-100%' : 0)}
  ); */

  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};

  /* border-top-left-radius: ${({ loc }) =>
    loc.hor === 'left' && loc.ver === 'top' ? 0 : '20px'};

  border-top-right-radius: ${({ loc }) =>
    loc.hor === 'right' && loc.ver === 'top' ? 0 : '20px'};

  border-bottom-left-radius: ${({ loc }) =>
    loc.hor === 'left' && loc.ver === 'bottom' ? 0 : '20px'};

  border-bottom-right-radius: ${({ loc }) =>
    loc.hor === 'right' && loc.ver === 'bottom' ? 0 : '20px'}; */

  min-height: 150px;
  min-width: 200px;
  max-width: 450px;

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
  height: 100%;
  font-size: 20px;
  line-height: 1.375;

  ${theme.mq.mobileOnly} {
    font-size: 16px;
  }
`;
