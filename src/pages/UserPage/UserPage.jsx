import Container from 'components/Container/Container';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { UserContainer, UserWrapper, PetsWrapper } from './UserPage.styled';

import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
// import { getUser } from 'redux/auth/authOperations';

const UserPage = () => {
  // const dispatch = useDispatch();
  // const isLogin = useSelector(selectIsLoggedIn);
  // const user = useSelector(selectUser);

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
      {/* {user && isLogin && ( */}
      <Container>
        <UserContainer>
          <UserWrapper>
            {/* <UserData user={user} /> */}
            <UserData />
          </UserWrapper>
          <PetsWrapper>
            <PetsData />
          </PetsWrapper>
        </UserContainer>
      </Container>
      {/* )} */}
    </section>
  );
};

export default UserPage;
