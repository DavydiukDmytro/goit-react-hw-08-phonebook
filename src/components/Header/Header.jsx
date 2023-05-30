import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/operationAuth';
import { selectUser } from 'store/auth/selectorsAuth';
import { Btn, Container, HeaderPage, Logo, Name } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <HeaderPage>
      <Logo>PhoneBook</Logo>
      <Container>
        <Name>{user.name}</Name>
        <Btn onClick={handleClick}>log Out</Btn>
      </Container>
    </HeaderPage>
  );
};
