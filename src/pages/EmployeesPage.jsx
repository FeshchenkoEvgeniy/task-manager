import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from 'components/Employees/EmployeeForm';
import EmployeeList from 'components/Employees/EmployeeList';
import { fetchEmployees, deleteEmployee } from 'redux/employees/employeeActions';

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees) || [];
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleAddEmployee = async (employee) => {
    dispatch(fetchEmployees());
  };

  const handleEditEmployee = (employee) => {
    setCurrentEmployee(employee);
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await dispatch(deleteEmployee(id));
      dispatch(fetchEmployees());
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h1>Employees</h1>
      <EmployeeForm 
        onAddEmployee={handleAddEmployee} 
        currentEmployee={currentEmployee} 
        setCurrentEmployee={setCurrentEmployee} 
      />
      <EmployeeList 
        employees={employees} 
        onEdit={handleEditEmployee} 
        onDelete={handleDeleteEmployee} 
      />
    </div>
  );
};

export default EmployeesPage;