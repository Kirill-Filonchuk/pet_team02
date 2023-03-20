import PropTypes from 'prop-types';
// import useAuth from 'hooks/useAuth/useAuth';
import { Navigate } from 'react-router';

const RestrictedRoute = ({ redirectTo, component: Component }) => {
  //temporary commented
  // const { isLoggedIn } = useAuth();

  //temporary variable for testing. Has to be deleted before production
  const isLoggedIn = true;

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};
export default RestrictedRoute;
