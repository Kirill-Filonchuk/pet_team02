import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
<<<<<<< HEAD

=======
  selectPending,
>>>>>>> main
} from '../../redux/auth/selectors';
import { getPets } from 'redux/pet/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
<<<<<<< HEAD
  const userPets = useSelector(getPets);
=======
  const isPending = useSelector(selectPending);
>>>>>>> main

  return {
    isLoggedIn,
    isRefreshing,
    user,
<<<<<<< HEAD
    userPets,
=======
    isPending
>>>>>>> main
  };
};

export default useAuth;
