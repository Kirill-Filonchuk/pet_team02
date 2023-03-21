import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
// import { Logo } from '../Logo/Logo';
// import { AuthNav } from './AuthNav';

export const Nav = () => {
  return (
    <>
      <Menu>
        <Link to="/news">News</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/notices">Find pet</Link>
        {/* <AuthNav /> */}
      </Menu>
    </>
  );
};

export const Menu = styled.div`
  @media screen and (max-width: 1280px) {
    transform: translateX(-500%);
  }

  ${p => p.theme.mq.desktop} {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: baseline;
    width: 100%;
    transform: translateX(0);
    padding-top: 20px;
    margin-left: 80px;
  }
`;

const Link = styled(NavLink)`
  display: block;
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
  &:first-child {
    margin-left: 80px;
  }
  &.active {
    color: #f59256;
  }
`;
