import BoardList from 'components/BoardList/BoardList';
import { StyledSidebar, Container, StyledButton  } from './Sidebar.styled';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import Logo from 'components/Logo/Logo';

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar className={isOpen ? 'isOpen' : null}>
      <Container>
        <div>
          <Logo />
        </div>
        <div>
          <StyledButton to="/employees" className={({ isActive }) => (isActive ? 'active-link' : '')}>
           Перейти до працівників
          </StyledButton>
        </div>

        <div>
          <BoardList />
        </div>

        <div>
          <LogoutBtn />
        </div>
      </Container>
    </StyledSidebar>
  );
}

export default Sidebar;
