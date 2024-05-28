import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, updateEmployee } from 'redux/employees/employeeActions';

const EmployeeForm = ({ onAddEmployee, currentEmployee, setCurrentEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [specialty, setSpecialty] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentEmployee) {
      setFirstName(currentEmployee.firstName);
      setLastName(currentEmployee.lastName);
      setDepartment(currentEmployee.department);
      setSpecialty(currentEmployee.specialty);
    }
  }, [currentEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      department,
      specialty,
    };

    try {
      if (currentEmployee) {
        console.log('Updating employee:', { ...newEmployee, _id: currentEmployee._id });
        await dispatch(updateEmployee({ ...newEmployee, _id: currentEmployee._id }));
      } else {
        console.log('Adding employee:', newEmployee);
        await dispatch(addEmployee(newEmployee));
        onAddEmployee(newEmployee);
      }
      setFirstName('');
      setLastName('');
      setDepartment('');
      setSpecialty('');
      setCurrentEmployee(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Department:
        <input value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <label>
        Specialty:
        <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
      </label>
      <button type="submit">{currentEmployee ? 'Update' : 'Save'}</button>
    </form>
  );
};

export default EmployeeForm;