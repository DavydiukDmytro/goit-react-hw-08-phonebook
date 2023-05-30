import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { PrivateRoute } from 'components/PrivateRoute';
import { SharedLayout } from 'components/SharedLayout';
import NotFound from 'page/NotFound';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'store/auth/operationAuth';
import { selectIsRefresh } from 'store/auth/selectorsAuth';

const LogInPage = lazy(() => import('page/LogInPage'));
const LogIn = lazy(() => import('page/LogIn'));
const Register = lazy(() => import('page/Register'));
const PhoneBook = lazy(() => import('page/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <Modal>
      <Loader />
    </Modal>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute
              redirectTo="/logInPage/logIn"
              component={<PhoneBook />}
            />
          }
        />
        <Route
          path="/logInPage"
          element={
            <PrivateRoute
              redirectTo="/"
              isAuthorizedUsers
              component={<LogInPage />}
            />
          }
        >
          <Route path="logIn" element={<LogIn />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
