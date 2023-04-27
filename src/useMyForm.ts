import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PlanBillingEnum, PlanTypeEnum } from './enums';

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  planType: PlanTypeEnum;
  planBilling: PlanBillingEnum;
};

const REQUIRED_FIELD_ERROR_MESSAGE = 'This field is required';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  email: Yup.string()
    .email('Invalid email')
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  phone: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  plan: Yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
});

const useMyForm = () => {
  const form = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      planType: PlanTypeEnum.ARCADE,
      planBilling: PlanBillingEnum.MONTHLY,
    },
    validationSchema: validationSchema,
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
