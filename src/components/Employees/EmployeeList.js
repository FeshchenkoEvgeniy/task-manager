import React from 'react';
import {StyledButton, StyledEmployeeContainer, StyledEmployeeRow, StyledEmployeeInfo} from './EmployeeList.styled'

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (!employees || employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <StyledEmployeeContainer>
      {employees.map((employee, index) => (
        <StyledEmployeeRow key={employee?._id || index}>
          <StyledEmployeeInfo>{employee?.firstName} {employee?.lastName} - {employee?.department} - {employee?.specialty}</StyledEmployeeInfo>
          <StyledButton onClick={() => onEdit(employee)}>Edit</StyledButton>
          <StyledButton onClick={() => onDelete(employee._id)}>Delete</StyledButton>
        </StyledEmployeeRow>
      ))}
    </StyledEmployeeContainer>
  );
};

export default EmployeeList;