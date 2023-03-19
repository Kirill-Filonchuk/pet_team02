import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<>Page is loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
