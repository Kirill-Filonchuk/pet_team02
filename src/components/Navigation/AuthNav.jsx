import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <nav style={{ display: 'flex' }}>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        Login
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        Registation
      </Link>
    </nav>
  );
};
const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  font-family: ${p => p.theme.fonts.manrope};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-style: normal;
  line-height: 27px;
  letter-spacing: 0.04em;
  &.active {
    color: #f59256;
    border-radius: 4px;
  }

  @media screen and (min-width: 1280px) {
    &&:nth-last-child(2) {
      margin-left: 274px;
    }
  }
`;
