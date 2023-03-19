import AddNoticeButton from '../AddNoticeButton';
import NoticesCategoriesNav from '../NoticesCategoriesNav';
import NoticesSearch from '../NoticesSearch';
import Container from '../Container';
// import { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import {
  NoticeSection,
  NoticesToolBar,
  NoticesWrapper,
  Title,
} from './Notices.styled';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from 'router';
import TempBtn from 'components/tempBtn/TempBtn';

const Notices = () => {
  // const [category, setCategory] = useState("sales");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const noticesNavLinks = [
    { title: 'sell', to: ROUTES.NOTICES_SELL },
    { title: 'lost-found', to: ROUTES.NOTICES_LOST_FOUND },
    { title: 'in good hands', to: ROUTES.NOTICES_FOR_FREE },
    { title: 'favorite ads', to: ROUTES.NOTICES_FAVORITE },
    { title: 'my ads', to: ROUTES.NOTICES_OWN },
  ];

  useEffect(() => {
    if (pathname === ROUTES.NOTICES) {
      navigate(ROUTES.NOTICES_SELL, { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <NoticesWrapper>
      <NoticeSection>
        <Container>
          <TempBtn />
          <Title>Find your favorite pet</Title>

          <NoticesSearch />

          <NoticesToolBar>
            <NoticesCategoriesNav links={noticesNavLinks} />
            <AddNoticeButton />
          </NoticesToolBar>
        </Container>
      </NoticeSection>

      {/* <Outlet context={[category, setCategory]} /> */}
      <Outlet context={noticesNavLinks} />
      {/* <Outlet /> */}
    </NoticesWrapper>
  );
};

export default Notices;
