import AddNoticeButton from '../AddNoticeButton';
import NoticesCategoriesNav from '../NoticesCategoriesNav';
import NoticesSearch from '../NoticesSearch';
import Container from '../Container';
import PageTitle from 'components/UIKit/PageTitle';
import useAuth from 'hooks/useAuth/useAuth';
import AddNoticeModal from 'components/AddNoticeModal/AddNoticeModal';
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

const Notices = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [query, setQuery] = useState('');

  const noticesNavLinks = [
    {
      title: 'sell',
      label: 'sell',
      to: ROUTES.NOTICES_SELL,
      endpoint: NOTICES_API_ENDPOINTS.SELL,
    },
    {
      title: 'lost / found',
      label: 'lost / found',
      to: ROUTES.NOTICES_LOST_FOUND,
      endpoint: NOTICES_API_ENDPOINTS.LOST_FOUND,
    },
    {
      title: 'in good hands',
      label: 'in good hands',
      to: ROUTES.NOTICES_FOR_FREE,
      endpoint: NOTICES_API_ENDPOINTS.IN_GOOD_HANDS,
    },
  ];

  if (isLoggedIn) {
    noticesNavLinks.push(
      {
        title: 'favorite ads',
        label: 'favorite ads',
        to: ROUTES.NOTICES_FAVORITE,
        endpoint: NOTICES_API_ENDPOINTS.FAVORITES,
      },
      {
        title: 'my ads',
        label: 'my ads',
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

  const onSearchHandler = query => {
    setQuery(query);
  };

  return (
    <NoticesWrapper>
      <NoticeSection>
        <Container>
          <PageTitle>Find your favorite pet</PageTitle>

          <NoticesSearch onSearch={onSearchHandler} />

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

      {isAddModalOpen && (
        <AddNoticeModal
          onClose={() => {
            setIsAddModalOpen(false);
          }}
          isOpen={isAddModalOpen}
        />
      )}

      <Outlet context={{ noticesNavLinks, query }} />
    </NoticesWrapper>
  );
};

export default Notices;
