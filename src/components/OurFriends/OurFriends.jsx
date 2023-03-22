import Container from 'components/Container';
import PageTitle from 'components/UIKit/PageTitle';
import { OurFriendsWrapper } from './OurFriends.styled';
const OurFriends = () => {
  return (
    <OurFriendsWrapper>
      <Container>
        <PageTitle>Our friends</PageTitle>
        {/* <NewsList searchWord={searchWord} /> */}
      </Container>
    </OurFriendsWrapper>
  );
};

export default OurFriends;
