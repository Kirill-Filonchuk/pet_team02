import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,

} from '../../redux/auth/selectors';
import { getPets } from 'redux/pet/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const userPets = useSelector(getPets);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    userPets,
  };
};

export default useAuth;
