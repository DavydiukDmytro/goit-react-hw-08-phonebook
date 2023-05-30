import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { FormAddContact } from 'components/FormAddContact';
import { Header } from 'components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'store/contactsList/operationContacts';
import {
  Container,
  ErrorTitle,
  ErrorType,
  SubContainer,
  TitleH1,
  TitleH2,
} from './PhoneBook.styled';
import {
  selectStatusLoading,
  selectError,
} from 'store/contactsList/selectorsContacts';
import { Modal } from 'components/Modal';
import { Loader } from 'components/Loader';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectStatusLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Container>
          <SubContainer>
            <Filter />
            <TitleH2>Contacts</TitleH2>
            <ContactList />
          </SubContainer>

          <FormAddContact />
          {isLoading && (
            <Modal>
              <Loader />
            </Modal>
          )}
          {error && (
            <Modal>
              <ErrorTitle>
                Oops, something went wrong, try again later.
              </ErrorTitle>
              <ErrorType>Error: {error}</ErrorType>
            </Modal>
          )}
        </Container>
      </main>
    </>
  );
};
export default PhoneBook;
