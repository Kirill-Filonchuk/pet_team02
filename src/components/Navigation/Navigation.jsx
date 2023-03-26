import { Menu, Wrapp, Link } from './Navigation.styled';

export const Nav = () => {
  return (
    <nav>
      <Menu>
        <Wrapp>
          <Link to="/news">News</Link>
        </Wrapp>
        <Wrapp>
          <Link to="/notices">Find pet</Link>
        </Wrapp>
        <Wrapp>
          <Link to="/friends">Our friends</Link>
        </Wrapp>
      </Menu>
    </nav>
  );
};
