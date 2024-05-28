import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (!employees || employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <div>
      {employees.map((employee, index) => (
        <div key={employee?._id || index}>
          <p>{employee?.firstName} {employee?.lastName} - {employee?.department} - {employee?.specialty}</p>
          <button onClick={() => onEdit(employee)}>Edit</button>
          <button onClick={() => onDelete(employee._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;