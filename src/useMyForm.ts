import * as Yup from 'yup';
import { useFormik } from 'formik';

const REQUIRED_FIELD_ERROR_MESSAGE = 'This field is required';

const useMyForm = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(REQUIRED_FIELD_ERROR_MESSAGE)
        .max(50, 'Must be 50 characters or less'),
      email: Yup.string()
        .required(REQUIRED_FIELD_ERROR_MESSAGE)
        .email('Invalid email address'),
      phone: Yup.number().required(REQUIRED_FIELD_ERROR_MESSAGE),
    }),
    onSubmit: () => {},
    validateOnChange: false,
    validateOnBlur: false,
  });

  return { form };
};

export default useMyForm;
