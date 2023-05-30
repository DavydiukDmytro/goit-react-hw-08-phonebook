import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/contactsList/operationContacts';
import { selectContacts } from 'store/contactsList/selectorsContacts';
import { popupMessage, typePopupMessage } from 'utils/popupMessage';
import { Btn, ContainerForm, Input, Label } from './FormAddContact.styled';

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: (values, { resetForm }) => {
      addContact(values, resetForm);
    },
  });

  const addContact = (values, resetForm) => {
    const isContact = contactList.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const isPhone = contactList.find(
      contact => contact.number.toLowerCase() === values.number.toLowerCase()
    );
    if (isContact && isPhone) {
      popupMessage('This contact already exists!', typePopupMessage.warning);
      return;
    }
    if (isContact) {
      popupMessage(
        `Contact with the name ${values.name} already exists!`,
        typePopupMessage.warning
      );
      return;
    }
    if (isPhone) {
      popupMessage(
        `Another name registered to this number!`,
        typePopupMessage.warning
      );
      return;
    } else {
      dispatch(addContactThunk(values));
      resetForm();
    }
  };

  return (
    <>
      <ContainerForm onSubmit={formik.handleSubmit}>
        <Label>
          Name
          <Input
            value={formik.values.name}
            type="text"
            name="name"
            onChange={formik.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            value={formik.values.number}
            type="tel"
            name="number"
            onChange={formik.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </ContainerForm>
    </>
  );
};
