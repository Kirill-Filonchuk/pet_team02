import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import Spinner from '../Helpers/Spinner';
import { SpinnerContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Suspense
        fallback={
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
