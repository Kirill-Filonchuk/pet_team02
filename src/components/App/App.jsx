import { RouterProvider } from 'react-router-dom';
import router from 'router';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
