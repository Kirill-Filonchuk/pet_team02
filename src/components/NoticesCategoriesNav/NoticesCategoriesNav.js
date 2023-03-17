import {
  Item,
  List,
  StyledNavLink,
  Wrapper,
} from "./NoticesCategoriesNav.styled";

const noticesNavLinks = [
  { title: "sell", to: "sell" },
  { title: "lost-found", to: "lost-found" },
  { title: "in good hands", to: "for-free" },
  { title: "favorite ads", to: "favorite" },
  { title: "my ads", to: "own" },
];

const NoticesCategoriesNav = () => {
  return (
    <Wrapper>
      <List>
        {noticesNavLinks.map(({ title, to }) => (
          <Item key={to}>
            <StyledNavLink to={to}>{title}</StyledNavLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default NoticesCategoriesNav;
