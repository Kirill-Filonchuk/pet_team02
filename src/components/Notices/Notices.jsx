import AddNoticeButton from '../AddNoticeButton';
import NoticesCategoriesNav from '../NoticesCategoriesNav';
import NoticesSearch from '../NoticesSearch';
import Container from '../Container';
// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import {
  NoticeSection,
  NoticesToolBar,
  NoticesWrapper,
  Title,
} from './Notices.styled';

const Notices = () => {
  // const [category, setCategory] = useState("sales");

  return (
    <NoticesWrapper>
      <NoticeSection>
        <Container>
          <Title>Find your favorite pet</Title>

          <NoticesSearch />

          <NoticesToolBar>
            <NoticesCategoriesNav />
            <AddNoticeButton />
          </NoticesToolBar>
        </Container>
      </NoticeSection>

      {/* <Outlet context={[category, setCategory]} /> */}
      <Outlet />
    </NoticesWrapper>
  );
};

export default Notices;
