import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeItem = ({ employee, onDelete }) => {
  return (
    <li>
      {employee.firstName} {employee.lastName} - {employee.department} ({employee.specialty})
      <Link to={`/edit-employee/${employee._id}`}>Edit</Link>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default EmployeeItem;