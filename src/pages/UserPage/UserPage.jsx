import { MainContainer } from './UserPage.styled';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { useSelector } from 'react-redux';

// import useAuth from '../../hooks/useAuth/useAuth';

import { UserContainer, UserWrapper, PetsWrapper } from './UserPage.styled';
import {
  // selectIsLoggedIn,
  selectUser,
} from '../../redux/auth/selectors';
import Container from 'components/Container/Container';

const UserPage = () => {
  // const isLogin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  // const { isRefreshing } = useAuth();

  return (
    <section>
      {/* {user & isLogin && (
        <> */}
      <Container>
        {/* <MainContainer> */}
        <UserContainer>
          <UserWrapper>
            <UserData user={user} />
          </UserWrapper>
          {/* <PetsWrapper> */}
          <PetsData />
          {/* </PetsWrapper> */}
        </UserContainer>

        {/* </MainContainer> */}
      </Container>
      {/* </>
      )} */}
    </section>
  );
};

export default UserPage;
