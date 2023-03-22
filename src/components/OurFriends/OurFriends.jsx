import Container from 'components/Container';
import PageTitle from 'components/UIKit/PageTitle';
import OurFriendsList from '../OurFriendsList';
import { OurFriendsWrapper } from './OurFriends.styled';
const OurFriends = () => {
  return (
    <OurFriendsWrapper>
      <Container>
        <PageTitle>Our friends</PageTitle>
        <OurFriendsList />
      </Container>
    </OurFriendsWrapper>
  );
};

export default OurFriends;
