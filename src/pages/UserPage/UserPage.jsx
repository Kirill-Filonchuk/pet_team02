// import Container from 'components/Container/Container';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { UserContainer, UserWrapper, PetsWrapper } from './UserPage.styled';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const UserPage = () => {
  // const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(getUser());
  //   }
  // }, [dispatch, user]);

  // export const fetchUserData = async () => {
  //   const { data } = await axios.get('/users/current');
  //   return data;
  // };

  return (
    <section>
      {user && isLogin && (
        <UserContainer>
          <UserWrapper>
            <UserData user={user} />
          </UserWrapper>
          <PetsWrapper>
            <PetsData />
          </PetsWrapper>
        </UserContainer>
      )}
    </section>
  );
};

export default UserPage;
