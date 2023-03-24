import AddNoticeButton from '../AddNoticeButton';
import NoticesCategoriesNav from '../NoticesCategoriesNav';
import NoticesSearch from '../NoticesSearch';
import Container from '../Container';
import PageTitle from 'components/UIKit/PageTitle';
import useAuth from 'hooks/useAuth/useAuth';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  NoticeSection,
  NoticesToolBar,
  NoticesWrapper,
} from './Notices.styled';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from 'router';
import { NOTICES_API_ENDPOINTS } from 'redux/notices/noticesApi';
import { useState } from 'react';
import TempAddPet from 'components/TempAddPet/TempAddPet';

const Notices = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { isLoggedIn } = useAuth();
  // const isLoggedIn = !true;

  //HARD CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -- MUST BE CHANGED!!!!!
  const noticesNavLinks = [
    {
      title: 'sell',
      label: 'Sell',
      to: ROUTES.NOTICES_SELL,
      endpoint: NOTICES_API_ENDPOINTS.SELL,
    },
    {
      title: 'lost-found',
      label: 'Lost / found',
      to: ROUTES.NOTICES_LOST_FOUND,
      endpoint: NOTICES_API_ENDPOINTS.LOST_FOUND,
    },
    {
      title: 'in good hands',
      label: 'In good hands',
      to: ROUTES.NOTICES_FOR_FREE,
      endpoint: NOTICES_API_ENDPOINTS.IN_GOOD_HANDS,
    },
  ];

  if (isLoggedIn) {
    noticesNavLinks.push(
      {
        title: 'favorite ads',
        label: 'Favorite ads',
        to: ROUTES.NOTICES_FAVORITE,
        endpoint: NOTICES_API_ENDPOINTS.FAVORITES,
      },
      {
        title: 'my ads',
        label: 'My ads',
        to: ROUTES.NOTICES_OWN,
        endpoint: NOTICES_API_ENDPOINTS.OWN,
      }
    );
  }

  useEffect(() => {
    if (pathname === ROUTES.NOTICES) {
      navigate(ROUTES.NOTICES_SELL, { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <NoticesWrapper>
      <NoticeSection>
        <Container>
          <PageTitle>Find your favorite pet</PageTitle>

          <NoticesSearch />

          <NoticesToolBar>
            <NoticesCategoriesNav links={noticesNavLinks} />
            <AddNoticeButton
              onClick={() => {
                // console.log('You can add new pet');
                setIsAddModalOpen(true);
              }}
              isLoggedIn={isLoggedIn}
            />
          </NoticesToolBar>
        </Container>
      </NoticeSection>

      {isAddModalOpen && <TempAddPet />}

      <Outlet context={noticesNavLinks} />
    </NoticesWrapper>
  );
};

export default Notices;
