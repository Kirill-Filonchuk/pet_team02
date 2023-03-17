import NoticesCategoriesList from 'components/NoticesCategoriesList';
import NoticesPage from 'pages/NoticesPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const routes = [
  {
    path: '/',
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
        path: 'news',
        element: <div>NewsPage</div>,
      },
      {
        path: 'notices',
        element: <NoticesPage />,
        children: [
          { path: 'sell', element: <NoticesCategoriesList /> },
          { path: 'lost-found', element: <NoticesCategoriesList /> },
          { path: 'for-free', element: <NoticesCategoriesList /> },
          { path: 'favorite', element: <NoticesCategoriesList /> },
          { path: 'own', element: <NoticesCategoriesList /> },
        ],
      },
      {
        path: 'friends',
        element: <div>OurFriendsPage</div>,
      },
      {
        path: 'register',
        element: <div>RegisterPage</div>,
      },
      {
        path: 'login',
        element: <div>LoginPage</div>,
      },
      {
        path: 'user',
        element: <div>UserPage</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/pet_team02/' });

export default router;
