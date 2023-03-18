import { Nav } from '../Navigation/Navigation';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { MenuBtn, HeaderStyle } from './Header.style';
import TempContainer from '../TempContainer/TempContainer';
import { useState } from 'react';

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <TempContainer>
      <HeaderStyle>
        <Nav />
        <MenuBtn onClick={() => setNav(!nav)}>
          {nav ? <GrClose size={30} /> : <HiMenu size={30} />}
        </MenuBtn>
      </HeaderStyle>
    </TempContainer>
  );
};
