import * as yup from 'yup';

// Validation schema for registration form
export const RegisterFormValidationSchema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name format'
      )
      .trim(),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
        'Invalid email format'
      )
      .trim(),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must not exceed 64 characters')
      .matches(
        /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
        'Invalid password format'
      )
      .required('Password is required'),
  })
  .required();
