import PropTypes from 'prop-types';
import { StyledTempContainer } from './Container.styled';

const Container = ({ children }) => {
  return <StyledTempContainer>{children}</StyledTempContainer>;
};
export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
