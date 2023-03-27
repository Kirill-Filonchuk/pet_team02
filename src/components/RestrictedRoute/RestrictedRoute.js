import PropTypes from 'prop-types';
import useAuth from 'hooks/useAuth/useAuth';
import { Navigate } from 'react-router';

const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    return;
  }

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};
export default RestrictedRoute;
