import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectIsLoggin } from 'store/auth/selectorsAuth';
import { Container, ContainerLink, Link, Title } from './LogInPage.styled';

const LogInPage = () => {
  const navigate = useNavigate();
  const isLoggin = useSelector(selectIsLoggin);

  useEffect(() => {
    if (isLoggin) {
      navigate('/', { replace: true });
    }
    return;
  }, [navigate, isLoggin]);

  return (
    <Container>
      <Title>To continue, log in or register</Title>
      <ContainerLink>
        <Link to="logIn">Login</Link>
        <Link to="register">Sign up</Link>
      </ContainerLink>
      <Suspense
        fallback={
          <Modal>
            <Loader />
          </Modal>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default LogInPage;
