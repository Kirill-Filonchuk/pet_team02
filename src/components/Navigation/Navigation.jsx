import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Logo } from '../Logo/Logo';
// import { AuthNav } from './AuthNav';

export const Nav = () => {
  return (
    <>
      <Menu>
        <Link to="/news">News</Link>
        <Link to="/notices">Find pet</Link>
        <Link to="/friends">Our friends</Link>
        {/* <AuthNav /> */}
      </Menu>
    </>
  );
};

export const Menu = styled.nav`
  ${p => p.theme.mq.desktop} {
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    align-items: center;
    width: 100%;
  }
  ${p => p.theme.mq.notDesktop} {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-right: 80px;
  color: black;
  font-family: ${p => p.theme.fonts.manrope};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-style: normal;
  line-height: 27px;
  letter-spacing: 0.04em;
  transition-property: color, transform;
  transition-duration: ${p => p.theme.transitions.durations.default};
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #f59256;
  }
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
  }
`;
