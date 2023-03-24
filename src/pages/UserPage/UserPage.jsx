import { ThreeDots } from 'react-loader-spinner';
import { MainContainer } from './UserPage.styled';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { useSelector } from 'react-redux';

import useAuth from '../../hooks/useAuth/useAuth';

import {
  UserContainer,
  UserWrapper,
  PetsWrapper,
  LoaderUser,
} from './UserPage.styled';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const UserPage = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const { isRefreshing } = useAuth();

  return (
    <section>
      {isRefreshing ? (
        <LoaderUser>
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color={'rgb(245, 146, 86)'}
          />
        </LoaderUser>
      ) : (
        user &&
        isLogin && (
          <>
            <MainContainer>
              <UserContainer>
                <UserWrapper>
                  <UserData user={user} />
                </UserWrapper>
                <PetsWrapper>
                  <PetsData />
                </PetsWrapper>
              </UserContainer>
            </MainContainer>
          </>
        )
      )}
    </section>
  );
};

export default UserPage;
