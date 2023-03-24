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

const Notices = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  // const isLoggedIn = !true;

  const noticesNavLinks = [
    { title: 'sell', label: 'Sell', to: ROUTES.NOTICES_SELL, category: 'sell' },
    {
      title: 'lost-found',
      label: 'Lost / found',
      to: ROUTES.NOTICES_LOST_FOUND,
      category: 'lost-found',
    },
    {
      title: 'in good hands',
      label: 'In good hands',
      to: ROUTES.NOTICES_FOR_FREE,
      category: 'for-free',
    },
  ];

  if (isLoggedIn) {
    noticesNavLinks.push(
      {
        title: 'favorite ads',
        label: 'Favorite ads',
        to: ROUTES.NOTICES_FAVORITE,
        category: 'favorite',
      },
      {
        title: 'my ads',
        label: 'My ads',
        to: ROUTES.NOTICES_OWN,
        category: 'own',
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
                console.log('You can add new pet');
              }}
              isLoggedIn={isLoggedIn}
            />
          </NoticesToolBar>
        </Container>
      </NoticeSection>

      <Outlet context={noticesNavLinks} />
    </NoticesWrapper>
  );
};

export default Notices;
