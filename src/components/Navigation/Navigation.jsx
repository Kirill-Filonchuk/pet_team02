import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { AuthNav } from './AuthNav';

export const Nav = () => {
  return (
    <>
      <Menu>
        <Logo />
        <Link to="/news">News</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/notices">Find pet</Link>
        <AuthNav />
      </Menu>
    </>
  );
};

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #f59256;
  }
`;
export const Menu = styled.nav`
  &.active {
    left: 0;
  }
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* Временно решение полногоперекрытия всей страницы */
  /* height: 100vh; */
  background-color: '#fffff';
  z-index: 1;
  transition: left 1s;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    align-items: baseline;
  }
`;
