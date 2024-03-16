import React, { useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { appThemes } from 'styles/Theme.styled';
import { useAppThemes, useIsGetting } from 'hooks';
import { getCurrentUser } from 'redux/authentication/operations';
import ScreenPageComponent from 'components/ScreenPage/ScreenPage';
import LayoutComponent from 'components/Layout/Layout';
import PrivateRouteComponent from 'components/PrivateRoute';
import RestrictedRouteComponent from 'components/RestrictedRoute';
import Loader from 'components/Loader/Loader';

const HomePageComponent = lazy(() => import('pages/HomePage'));
const WelcomePageComponent = lazy(() => import('pages/WelcomePage'));
const AuthPageComponent = lazy(() => import('pages/AuthPage'));
const NotFoundPageComponent = lazy(() => import('pages/NotFoundPage'));

function App() {
  const currentTheme = useAppThemes();
  const isDataFetching = useIsGetting();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isDataFetching ? (
    <Loader />
  ) : (
    <ThemeProvider theme={appThemes[currentTheme]}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/greetings" element={<WelcomePageComponent />} />

          <Route
            path="/authentication/:id"
            element={
              <RestrictedRouteComponent redirectTo="/home">
                <AuthPageComponent />
              </RestrictedRouteComponent>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRouteComponent redirectTo="/authentication/login">
                <LayoutComponent />
              </PrivateRouteComponent>
            }
          >
            <Route
              index
              element={
                <PrivateRouteComponent redirectTo="/authentication/login">
                  <HomePageComponent />
                </PrivateRouteComponent>
              }
            />
            <Route
              path="/home/:nameBoard"
              element={
                <PrivateRouteComponent redirectTo="/authentication/login">
                  <ScreenPageComponent />
                </PrivateRouteComponent>
              }
            />
          </Route>
          <Route path="/" element={<Navigate to="/greetings" />} />
          <Route path="*" element={<NotFoundPageComponent />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
