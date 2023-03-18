import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
// import { Logo } from '../Logo/Logo';
import { AuthNav } from './AuthNav';

export const Nav = () => {
  return (
    <>
      <Menu>
        {/* <Logo /> */}
        <Link to="/news">News</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/notices">Find pet</Link>
        <AuthNav />
      </Menu>
    </>
  );
};

export const Menu = styled.div`
  /* &.active {
    transform: translateX(-100%);
  } */
  @media screen and (max-width: 1280px) {
    transform: translateX(-500%);
  }
  /* display: flex;
    flex-direction: column;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    /* pointer-events: none; */
  /* background-color: '#FDF7F2';
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); */

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: baseline;
    width: 100%;
    transform: translateX(0);
    margin-left: 80px;
    /* pointer-events: auto; */
    /* height: 48px; */
  }
`;

const Link = styled(NavLink)`
  /* position: relative; */
  display: block;
  text-align: center;
  /* padding: 8px 16px; */
  border-radius: 4px;
  text-decoration: none;
  /* margin-left: 80px; */
  margin-right: 80px;
  color: black;
  font-weight: 500;

  &.active {
    color: #f59256;
  }
`;
