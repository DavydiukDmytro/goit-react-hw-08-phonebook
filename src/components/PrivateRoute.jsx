import { useSelector } from 'react-redux';
import { selectIsLoggin } from 'store/auth/selectorsAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  isAuthorizedUsers = false,
}) => {
  const isLoggedIn = useSelector(selectIsLoggin);
  if (isAuthorizedUsers) {
    return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
  } else {
    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
  }
};
