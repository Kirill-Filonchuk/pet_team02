import useAuth from 'hooks/useAuth/useAuth';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

const PrivateRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn, isRefreshing, isPending } = useAuth();

  if (isRefreshing || isPending) {
    return;
  }

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
