import { ROUTES } from 'router';
import {
  Item,
  List,
  StyledNavLink,
  Wrapper,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const noticesNavLinks = [
    { title: 'sell', to: ROUTES.NOTICES_SELL },
    { title: 'lost-found', to: ROUTES.NOTICES_LOST_FOUND },
    { title: 'in good hands', to: ROUTES.NOTICES_FOR_FREE },
    { title: 'favorite ads', to: ROUTES.NOTICES_FAVORITE },
    { title: 'my ads', to: ROUTES.NOTICES_OWN },
  ];

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
