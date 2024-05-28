import { privateJsonAxios } from 'services/axios';

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const FETCH_EMPLOYEE_BY_ID = 'FETCH_EMPLOYEE_BY_ID';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export const fetchEmployees = () => async dispatch => {
  dispatch({ type: 'FETCH_EMPLOYEES_START' });
  try {
    const response = await privateJsonAxios.get('/api/employees');
    console.log('API response:', response.data);
    dispatch({ type: FETCH_EMPLOYEES, payload: response.data.data.employees });
  } catch (error) {
    console.error('Error fetching employees:', error);
    dispatch({ type: 'FETCH_EMPLOYEES_ERROR', payload: error.message });
  }
};

export const fetchEmployeeById = id => async dispatch => {
  try {
    const response = await privateJsonAxios.get(`/api/employees/${id}`);
    dispatch({ type: FETCH_EMPLOYEE_BY_ID, payload: response.data.data.employee });
  } catch (error) {
    console.error('Error fetching employee by ID:', error);
  }
};

export const addEmployee = employee => async dispatch => {
  try {
    console.log('Adding employee:', employee);
    const response = await privateJsonAxios.post('/api/employees', employee);
    console.log('Add employee response:', response.data);
    dispatch({ type: ADD_EMPLOYEE, payload: response.data.data.employee });
    return response;
  } catch (error) {
    console.error('Error adding employee:', error);
  }
};

export const updateEmployee = employee => async dispatch => {
  try {
    console.log('Updating employee:', employee);

    const { _id, ...dataWithoutId } = employee;

    const response = await privateJsonAxios.put(`/api/employees/${_id}`, dataWithoutId);
    console.log('Update employee response:', response.data);
    dispatch({ type: UPDATE_EMPLOYEE, payload: response.data.data.employee });
    return response;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const deleteEmployee = id => async dispatch => {
  try {
    console.log('Deleting employee with ID:', id);
    await privateJsonAxios.delete(`/api/employees/${id}`);
    dispatch({ type: DELETE_EMPLOYEE, payload: id });
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};
