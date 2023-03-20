import PropTypes from 'prop-types';
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

NoticesCategoriesNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};
