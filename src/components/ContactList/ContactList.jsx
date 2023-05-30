import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'store/contactsList/operationContacts';
import {
  selectFilterContacts,
  selectStatusLoading,
} from 'store/contactsList/selectorsContacts';
import { Btn, Contacts, Item, Text } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectStatusLoading);
  return (
    <>
      {contactList.length === 0 ? (
        !isLoading && <Text>No contacts</Text>
      ) : (
        <ul>
          {contactList.map(name => (
            <Item key={name.id}>
              <Contacts>
                {name.name}: {name.number}
              </Contacts>
              <Btn
                type="button"
                id={name.id}
                onClick={({ target: { id } }) => {
                  if (!isLoading) {
                    dispatch(deleteContactThunk(id));
                  }
                }}
              >
                Delete
              </Btn>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};
