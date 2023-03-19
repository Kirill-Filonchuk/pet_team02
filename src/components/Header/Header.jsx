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
} from './Header.style';
// import TempContainer from '../TempContainer/TempContainer';

import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../Navigation/AuthNav';
// import { useState } from 'react';

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
        </MenuDesctop>
        <MenuBtn onClick={toggle}>
          {isOpen ? <GrClose size={30} /> : <HiMenu size={30} />}
        </MenuBtn>
        {isOpen && (
          <Burger>
            <ListMenu>
              <Logo />
              <Link to="/news">News</Link>
              <Link to="/friends">Friends</Link>
              <Link to="/notices">Find pet</Link>
              <AuthNavigate>
                <AuthNav />
              </AuthNavigate>
            </ListMenu>
          </Burger>
        )}
      </HeaderStyle>
    </HeaderContainer>
  );
};
