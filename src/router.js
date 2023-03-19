import NoticesCategoriesList from 'components/NoticesCategoriesList';
import UserPage from 'components/UserPage';
import NoticesPage from 'pages/NoticesPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';

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
    element: (
      <div>
        Layout / <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <div>HomePage</div>,
      },
      {
        path: ROUTES.NEWS,
        element: <div>NewsPage</div>,
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
        element: <div>OurFriendsPage</div>,
      },
      {
        path: ROUTES.REGISTER,
        element: <div>RegisterPage</div>,
      },
      {
        path: ROUTES.LOGIN,
        element: <div>LoginPage</div>,
      },
      {
        path: ROUTES.USER,
        element: <UserPage/>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/pet_team02/' });

export default router;
