import { ThreeDots } from 'react-loader-spinner';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { refreshUser } from '../../redux/auth/operations';
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(refreshUser());
    }
  }, [dispatch, user]);

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
            <UserContainer>
              <UserWrapper>
                <UserData user={user} />
              </UserWrapper>
              <PetsWrapper>
                <PetsData />
              </PetsWrapper>
            </UserContainer>
          </>
        )
      )}
    </section>
  );
};

export default UserPage;
