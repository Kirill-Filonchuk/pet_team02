import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { useSelector } from 'react-redux';

import { UserContainer, UserWrapper } from './UserPage.styled';
import { selectUser } from '../../redux/auth/selectors';
import Container from 'components/Container/Container';

const UserPage = () => {
  const user = useSelector(selectUser);

  return (
    <section>
      <Container>
        <UserContainer>
          <UserWrapper>
            <UserData user={user} />
          </UserWrapper>
          <PetsData />
        </UserContainer>
      </Container>
    </section>
  );
};

export default UserPage;
