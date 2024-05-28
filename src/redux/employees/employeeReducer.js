import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE_BY_ID,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from './employeeActions';

const initialState = {
  employees: [],
  employee: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return { ...state, employees: Array.isArray(action.payload) ? action.payload : [] };
    case FETCH_EMPLOYEE_BY_ID:
      return { ...state, employee: action.payload };
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp._id === action.payload._id ? action.payload : emp
        ),
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(emp => emp._id !== action.payload),
      };
    default:
      return state;
  }
};

export default employeeReducer;
