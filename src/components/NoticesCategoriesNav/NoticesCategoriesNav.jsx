import {
  Item,
  List,
  StyledNavLink,
  Wrapper,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ links }) => {
  return (
    <Wrapper>
      <List>
        {links.map(({ title, to }) => (
          <Item key={to}>
            <StyledNavLink to={to}>{title}</StyledNavLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default NoticesCategoriesNav;
