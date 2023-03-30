import NoticesCategoriesList from 'components/NoticesCategoriesList';

import { createBrowserRouter } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { lazy } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

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
          {
            path: ROUTES.NOTICES_FAVORITE,
            element: (
              <PrivateRoute
                redirectTo={ROUTES.LOGIN}
                component={NoticesCategoriesList}
              />
            ),
          },
          {
            path: ROUTES.NOTICES_OWN,
            element: (
              <PrivateRoute
                redirectTo={ROUTES.LOGIN}
                component={NoticesCategoriesList}
              />
            ),
          },
        ],
      },
      {
        path: ROUTES.FRIENDS,
        element: <OurFriendsPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <RestrictedRoute redirectTo={ROUTES.USER} component={RegisterPage} />
        ),
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <RestrictedRoute redirectTo={ROUTES.USER} component={LoginPage} />
        ),
      },
      {
        path: ROUTES.USER,
        element: (
          <PrivateRoute redirectTo={ROUTES.LOGIN} component={UserPage} />
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/pet_team02' });

export default router;
