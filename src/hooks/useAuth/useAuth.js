import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  isSubmitting,
} from '../../redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isSubmit = useSelector(isSubmitting);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isSubmit
  };
};

export default useAuth;
