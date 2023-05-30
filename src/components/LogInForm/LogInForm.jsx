import {
  Btn,
  Input,
  Label,
} from 'components/FormAddContact/FormAddContact.styled';
import { useFormik } from 'formik';
import { ContainerLabel } from 'page/LogInPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'store/auth/operationAuth';
import { selectError } from 'store/auth/selectorsAuth';
import { popupMessage, typePopupMessage } from 'utils/popupMessage';
import { ErrorText } from './LogInForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      if (values.email === '' || values.password === '') {
        popupMessage('All fields must be filled', typePopupMessage.warning);
        return;
      }
      dispatch(logIn(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
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
      <Btn type="submit">Log In</Btn>
    </form>
  );
};
