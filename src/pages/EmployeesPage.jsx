import React, { useEffect, useState,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeForm from 'components/Employees/EmployeeForm';
import EmployeeList from 'components/Employees/EmployeeList';
import { fetchEmployees, deleteEmployee } from 'redux/employees/employeeActions';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Modal from '../components/ModalWindow/ModalWindow';
import {StyledButton, StyledTitle, StyledDiv} from './styled/EmployeePage.styled'

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees) || [];
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleAddEmployee = async (employee) => {
    dispatch(fetchEmployees());
    setIsModalOpen(false);
  };

  const handleEditEmployee = (employee) => {
    setCurrentEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await dispatch(deleteEmployee(id));
      dispatch(fetchEmployees());
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myRef = useRef(null);
  const [size, setSize] = useState({});

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = myRef.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (size.clientWidth > 1439) {
      setIsSidebarOpen(true);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [size.clientWidth]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleClickOutside = e => {
    const modal = document.getElementById('modal-root');
    if (!myRef.current.contains(e.target) && !modal.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  const handleOpenModal = () => {
    setCurrentEmployee(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledDiv>
    <Header openSidebar={openSidebar} />
    <div ref={myRef}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>
    <div>
      <StyledButton onClick={handleOpenModal}>Додати працівника</StyledButton>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <EmployeeForm
            onAddEmployee={handleAddEmployee}
            currentEmployee={currentEmployee}
            setCurrentEmployee={setCurrentEmployee}
          />
        </Modal>
        <StyledTitle>Список працівників</StyledTitle>
      <EmployeeList 
        employees={employees} 
        onEdit={handleEditEmployee} 
        onDelete={handleDeleteEmployee} 
      />
    </div>
    </StyledDiv>
  );
};

export default EmployeesPage;