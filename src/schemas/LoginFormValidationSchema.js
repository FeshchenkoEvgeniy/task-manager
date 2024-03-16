import * as yup from 'yup';

// Validation schema for login form
export const LoginFormValidationSchema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
        'Invalid email format'
      ),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must not exceed 64 characters')
      .matches(
        /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
        'Invalid password format'
      ),
  })
  .required();
