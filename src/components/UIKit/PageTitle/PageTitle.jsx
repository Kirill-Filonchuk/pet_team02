import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

const PageTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;

PageTitle.propTypes = {
  children: PropTypes.node,
};
