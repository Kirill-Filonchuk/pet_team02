import { Item, List } from './OurFriendsList.styled';
import { useEffect, useState } from 'react';
// import propTypes from 'prop-types';
import axios from 'axios';
// import NewsCard from 'components/NewsCard';

const OurFriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getOurFriends = async () => {
      const response = await axios.get(
        'https://tiny-hare-cowboy-hat.cyclic.app/api/services'
      );
      //   console.log('response===', response);
      const data = response.data.result;
      console.log('data===', data);
      setFriends(data);
    };
    getOurFriends();
  }, []);

  return (
    <List>
      {friends.map(item => (
        <Item key={item._id}>
          {/* <NewsCard {...item} /> */}
          <p>{item.title}</p>
        </Item>
      ))}
    </List>
  );
};

// NewsList.propTypes = {
//   searchWord: propTypes.string.isRequired,
//   notify: propTypes.func.isRequired,
// };

export default OurFriendsList;
