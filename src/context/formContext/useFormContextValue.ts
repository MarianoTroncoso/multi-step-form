import { useEffect, useState } from 'react';
import { PlanBillingEnum, PlanTypeEnum } from '../../enums';
import { FormValuesType } from '../../types';
import { FormContextData } from '.';
import { isEmpty } from 'lodash';

export const DEFAULT_FORM_VALUES_CONFIG: FormValuesType = {
  name: '',
  email: '',
  phone: '',
  planType: PlanTypeEnum.ARCADE,
  planBilling: PlanBillingEnum.MONTHLY,
};

const formValuesConfig = JSON.parse(
  localStorage.getItem('formValuesConfig') || '{}'
);

const useFormContextValue = (): FormContextData => {
  const [values, setValues] = useState<FormValuesType>(
    isEmpty(formValuesConfig)
      ? DEFAULT_FORM_VALUES_CONFIG
      : formValuesConfig.values
  );

  useEffect(() => {
    localStorage.setItem(
      'formValuesConfig',
      JSON.stringify({
        values,
      })
    );
  }, [values]);

  return {
    values,
    setValues,
  };
};

export default useFormContextValue;
