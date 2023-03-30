import { RouterProvider } from 'react-router-dom';
import router from 'router';
import { useDispatch } from 'react-redux';
// import useAuth from '../../hooks/useAuth/useAuth';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();

  // const { isRefreshing } = useAuth();

  console.log(process.env.REACT_APP_BACK_END_API_BASE_URL);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <RouterProvider router={router} />;
  // isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (

  // );
};

export default App;
