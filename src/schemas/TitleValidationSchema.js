import * as yup from 'yup';

// Validation schema for title
export const TitleValidationSchema = yup
  .object({
    title: yup.string().required('Title is required'),
  })
  .required();
