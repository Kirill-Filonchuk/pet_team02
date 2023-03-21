import React, { useState } from 'react';
import { Nav } from '../Navigation/Navigation';
import {
  HeaderStyle,
  MenuBtn,
  Link,
  Burger,
  MenuDesctop,
  ListMenu,
  HeaderContainer,
  AuthNavigate,
  LogoStyle,
  LinkAuth,
  AuthNavigateTablet,
  LinkAuthTablet,
} from './Header.style';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  //   const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  //   const showMenu = () => setNav(!nav);

  return (
    <HeaderContainer>
      <HeaderStyle>
        <MenuDesctop>
          <Logo />
          <Nav />
          <AuthNavigateTablet style={{ marginBottom: 20 }}>
            <LinkAuthTablet to="/login">Login</LinkAuthTablet>
            <LinkAuth to="/register">Registation</LinkAuth>
          </AuthNavigateTablet>
        </MenuDesctop>
        <MenuBtn onClick={toggle}>
          {isOpen ? <GrClose size={30} /> : <HiMenu size={30} />}
        </MenuBtn>
        {isOpen && (
          <Burger>
            <ListMenu>
              <AuthNavigate style={{ marginBottom: 20 }}>
                <LinkAuth to="/login" onClick={toggle}>
                  Login
                </LinkAuth>
                <LinkAuth to="/register" onClick={toggle}>
                  Registation
                </LinkAuth>
              </AuthNavigate>
              <LogoStyle onClick={toggle}>
                <Logo />
              </LogoStyle>
              <Link to="/news" onClick={toggle}>
                News
              </Link>
              <Link to="/friends" onClick={toggle}>
                Friends
              </Link>
              <Link to="/notices" onClick={toggle}>
                Find pet
              </Link>
            </ListMenu>
          </Burger>
        )}
      </HeaderStyle>
    </HeaderContainer>
  );
};
