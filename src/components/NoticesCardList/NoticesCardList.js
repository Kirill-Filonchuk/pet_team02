import NoticesCard from "../NoticesCard";
import { Item, List } from "./NoticesCardList.styled";

const NoticesCardList = ({ list, label }) => {
  return (
    <List>
      {list.map((item) => (
        <Item key={item.id}>
          <NoticesCard {...item} label={label} />
        </Item>
      ))}
    </List>
  );
};

export default NoticesCardList;

//prop-types
//isMine could be changed according to backend
