import PropTypes from 'prop-types';
import NoticesCard from '../NoticesCard';
import { Item, List } from './NoticesCardList.styled';

const NoticesCardList = ({ list, label }) => {
  return (
    <List>
      {list.map(item => (
        <Item key={item.id}>
          <NoticesCard {...item} label={label} />
        </Item>
      ))}
    </List>
  );
};

export default NoticesCardList;

NoticesCardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
};

//isMine could be changed according to backend
//label shoul be canceled after backend fetch lists
