import NoticesCategoriesList from 'components/NoticesCategoriesList';
import NoticesPage from 'pages/NoticesPage';
import { createBrowserRouter } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import NewsPage from './pages/NewsPage/NewsPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

export const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  FRIENDS: '/friends',
  REGISTER: '/register',
  LOGIN: '/login',
  USER: '/user',
  NOTICES: '/notices',
  NOTICES_SELL: '/notices/sell',
  NOTICES_FOR_FREE: '/notices/for-free',
  NOTICES_LOST_FOUND: '/notices/lost-found',
  NOTICES_FAVORITE: '/notices/favorite',
  NOTICES_OWN: '/notices/own',
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.NEWS,
        element: <NewsPage />,
      },
      {
        path: ROUTES.NOTICES,
        element: <NoticesPage />,
        children: [
          { path: ROUTES.NOTICES_SELL, element: <NoticesCategoriesList /> },
          {
            path: ROUTES.NOTICES_LOST_FOUND,
            element: <NoticesCategoriesList />,
          },
          { path: ROUTES.NOTICES_FOR_FREE, element: <NoticesCategoriesList /> },
          { path: ROUTES.NOTICES_FAVORITE, element: <NoticesCategoriesList /> },
          { path: ROUTES.NOTICES_OWN, element: <NoticesCategoriesList /> },
        ],
      },
      {
        path: ROUTES.FRIENDS,
        element: <OurFriendsPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.USER,
        element: <div>UserPage</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/pet_team02' });

export default router;
