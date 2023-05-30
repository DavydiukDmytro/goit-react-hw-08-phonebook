import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { ErrorTitle, ErrorType } from 'page/PhoneBook.styled';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectError, selectIsLoading } from 'store/auth/selectorsAuth';

export const SharedLayout = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Suspense
        fallback={
          <Modal>
            <Loader />
          </Modal>
        }
      >
        <Outlet />
      </Suspense>
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {error && error.status !== 400 && (
        <Modal>
          <ErrorTitle>Oops, something went wrong, try again later.</ErrorTitle>
          <ErrorType>Error: {error.message}</ErrorType>
        </Modal>
      )}
    </>
  );
};
