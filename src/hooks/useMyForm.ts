import { AddOn } from './../components/PickAddOns/PickAddOns.styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FormValuesType } from '../types';
import useFormContext from '../context/formContext/useFormContext';

const REQUIRED_FIELD_ERROR_MESSAGE = 'This field is required';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  email: Yup.string()
    .email('Invalid email')
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  phone: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  planType: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  planBilling: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  addOns: Yup.array().of(Yup.object().shape(AddOn)),
});

const useMyForm = () => {
  const { values: initialValues } = useFormContext();

  const form = useFormik<FormValuesType>({
    initialValues,
    validationSchema,
    onSubmit: () => {},
    validateOnBlur: false,
  });

  return { form, validationSchema };
};

export default useMyForm;
