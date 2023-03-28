import useAuth from 'hooks/useAuth/useAuth';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

const PrivateRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    return;
  }

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
