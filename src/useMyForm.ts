import { useFormik } from 'formik';

const useMyForm = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: () => {},
  });

  return { form };
};

export default useMyForm;
