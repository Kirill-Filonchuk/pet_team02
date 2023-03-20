// import useAuth from 'hooks/useAuth/useAuth';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

const PrivateRoute = ({ redirectTo, component: Component }) => {
  //temporary commented
  // const { isLoggedIn } = useAuth();

  //temporary variable for testing. Has to be deleted before production
  const isLoggedIn = true;

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
