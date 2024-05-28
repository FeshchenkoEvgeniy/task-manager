import Loader from 'components/Loader/Loader';
import sprite from '../../assets/sprite.svg';
import { StyledLogOutBtn, StyledSpan, Icon } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/authentication/operations';
import { useIsUsersLoading } from 'hooks';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const isLoading = useIsUsersLoading();

  function onClick() {
    dispatch(logOutUser());
  }

  return (
    <>
      {isLoading && <Loader />}
      <StyledLogOutBtn onClick={onClick}>
        <Icon width="32px" height="32px">
          <use href={`${sprite}#logout`} />
        </Icon>
        <StyledSpan>Вийти</StyledSpan>
      </StyledLogOutBtn>
    </>
  );
};

export default LogoutBtn;
