import { AddOn } from './../components/PickAddOns/PickAddOns.styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FormValuesType } from '../types';
import useFormContext from '../context/formContext/useFormContext';

const REQUIRED_FIELD_ERROR_MESSAGE = 'This field is required';

const validationSchema = Yup.object().shape({
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

  const isProgressValid = async () => {
    const { validateForm, touched } = form;

    const hasTouchedFields = Object.keys(touched).length > 0;

    const errors = await validateForm();

    const fieldsWithErrors = Object.keys(errors);

    if (hasTouchedFields) {
      const touchedFields = Object.keys(touched);

      const hasErrorInTouchedField = fieldsWithErrors.some((field) =>
        touchedFields.includes(field)
      );

      return !hasErrorInTouchedField;
    } else {
      const hasError = fieldsWithErrors.length > 0;

      return !hasError;
    }
  };

  return { form, validationSchema, isProgressValid };
};

export default useMyForm;
