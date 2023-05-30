import {
  Btn,
  Input,
  Label,
} from 'components/FormAddContact/FormAddContact.styled';
import { ErrorText } from 'components/LogInForm/LogInForm.styled';
import { useFormik } from 'formik';
import { ContainerLabel } from 'page/LogInPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'store/auth/operationAuth';
import { selectError } from 'store/auth/selectorsAuth';
import { popupMessage, typePopupMessage } from 'utils/popupMessage';

export const RegisterForm = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: values => {
      if (values.email === '' || values.password === '' || values.name === '') {
        popupMessage('All fields must be filled', typePopupMessage.warning);
        return;
      }
      dispatch(register(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <ContainerLabel>
        <Label>
          Username
          <Input
            className="login"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            name="name"
          />
        </Label>
      </ContainerLabel>
      <ContainerLabel>
        <Label>
          Email
          <Input
            className="login"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
          />
        </Label>
      </ContainerLabel>
      <ContainerLabel>
        <Label>
          Password
          <Input
            className="login"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
          />
        </Label>
      </ContainerLabel>
      {error && error.status === 400 && (
        <ErrorText>You have entered incorrect data</ErrorText>
      )}
      <Btn type="submit">Register</Btn>
    </form>
  );
};
