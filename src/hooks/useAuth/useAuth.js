import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectPending,
} from '../../redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isPending = useSelector(selectPending);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isPending
  };
};

export default useAuth;
