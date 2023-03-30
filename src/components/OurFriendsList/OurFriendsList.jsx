import { useEffect, useState } from 'react';
import axios from 'axios';
import { Item, List } from './OurFriendsList.styled';
import OurFriendsCard from 'components/OurFriendsCard';

const OurFriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getOurFriends = async () => {
      try {
        const response = await axios.get(
          'https://tiny-hare-cowboy-hat.cyclic.app/api/services'
        );
        const data = response.data.result;
        setFriends(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getOurFriends();
  }, []);

  return (
    <List>
      {friends.map(item => (
        <Item key={item._id}>
          <OurFriendsCard {...item} />
        </Item>
      ))}
    </List>
  );
};

export default OurFriendsList;
