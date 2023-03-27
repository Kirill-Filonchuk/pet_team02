import styled from 'styled-components';
import { theme } from 'theme';
import { NavLink } from 'react-router-dom';

// export const ButtonBurger = styled(NavLink)`
//   padding: 8px 37px;
//   border: 2px solid #f59256;
//   border-radius: ${theme.radii.normal};
//   background-color: ${theme.colors.accent};
//   font-size: ${theme.fontSizes[1]}px;
//   font-weight: ${theme.fontWeights.medium};
//   font-family: ${theme.fonts.manrope};
//   font-style: normal;
//   line-height: 19px;
//   letter-spacing: 0.04em;
//   text-decoration: none;
//   color: ${theme.colors.white};
//   display: flex;
//   ${theme.mq.tablet} {
//     display: none;
//   }
// `;

export const Button = styled(NavLink)`
  display: none;
  padding: 8px 37px;
  border: 2px solid #f59256;
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.accent};
  font-size: ${theme.fontSizes[1]}px;
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.manrope};
  font-style: normal;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${theme.colors.white};
  align-items: center;
  width: 164px;
  transition-property: background-color, transform;
  transition-duration: 500ms;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentActive};
    text-decoration-line: none;
    transform: scale(1.1);
  }
  ${theme.mq.tablet} {
    margin-right: 20px;
    margin-left: auto;
    display: flex;
    padding: 10px 34px;
  }

  ${theme.mq.desktop} {
    margin-right: 0px;
    padding: 10px 34px;
  }
`;
