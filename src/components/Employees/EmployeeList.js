import React from 'react';
import { StyledTable, StyledTableRow, StyledTableCell, StyledTableHeader, StyledButton } from './EmployeeList.styled';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (!employees || employees.length === 0) {
    return <p>Працівників не знайдено</p>;
  }

  return (
    <StyledTable>
      <thead>
        <StyledTableRow>
          <StyledTableHeader>Ім'я</StyledTableHeader>
          <StyledTableHeader>Прізвище</StyledTableHeader>
          <StyledTableHeader>Відділ</StyledTableHeader>
          <StyledTableHeader>Спеціальність</StyledTableHeader>
          <StyledTableHeader>Дії</StyledTableHeader>
        </StyledTableRow>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <StyledTableRow key={employee?._id || index}>
            <StyledTableCell>{employee?.firstName}</StyledTableCell>
            <StyledTableCell>{employee?.lastName}</StyledTableCell>
            <StyledTableCell>{employee?.department}</StyledTableCell>
            <StyledTableCell>{employee?.specialty}</StyledTableCell>
            <StyledTableCell>
              <StyledButton onClick={() => onEdit(employee)}>Редагувати</StyledButton>
              <StyledButton onClick={() => onDelete(employee._id)}>Видалити</StyledButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default EmployeeList;