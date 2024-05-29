import BoardList from 'components/BoardList/BoardList';
import { StyledSidebar, Container, StyledButton  } from './Sidebar.styled';
import { useLocation } from 'react-router-dom';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import Logo from 'components/Logo/Logo';

function Sidebar({ isOpen }) {
  const location = useLocation();

  const shouldDisplaySidebar = !location.pathname.includes('/employees');

  return (
    shouldDisplaySidebar ? 
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
    : <StyledSidebar className={isOpen ? 'isOpen' : null}>
    <Container>
      <div>
        <Logo />
      </div>
      <div>
        <StyledButton to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
         Повернутися назад
        </StyledButton>
      </div>
      <div>
        <LogoutBtn />
      </div>
    </Container>
  </StyledSidebar>
  );
}

export default Sidebar;
