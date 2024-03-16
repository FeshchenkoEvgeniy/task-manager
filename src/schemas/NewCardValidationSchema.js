import * as yup from 'yup';

// Validation schema for adding a new card
export const NewCardValidationSchema = yup
  .object({
    title: yup.string().required('Title is required'),
    description: yup.string(),
    lableColor: yup.string().required('Label color is required'),
  })
  .required();
