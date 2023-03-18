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
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from 'router';

const Notices = () => {
  // const [category, setCategory] = useState("sales");

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === ROUTES.NOTICES) {
    }
  }, [pathname]);

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
