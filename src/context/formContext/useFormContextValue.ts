import { useEffect, useState } from 'react';
import { PlanBillingEnum, PlanTypeEnum } from '../../enums';
import { AddOn, FormValuesType, Step } from '../../types';
import { FormContextData } from '.';
import { isEmpty } from 'lodash';
import { FIRST_STEP } from '../../constants';

export const DEFAULT_FORM_VALUES_CONFIG: FormValuesType = {
  name: '',
  email: '',
  phone: '',
  planType: PlanTypeEnum.ARCADE,
  planBilling: PlanBillingEnum.MONTHLY,
  addOns: [] as AddOn[],
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

  const [lastValidStep, setLastValidStep] = useState<Step>(
    isEmpty(formValuesConfig) ? FIRST_STEP : formValuesConfig.lastValidStep
  );

  useEffect(() => {
    localStorage.setItem(
      'formValuesConfig',
      JSON.stringify({
        values,
        lastValidStep,
      })
    );
  }, [lastValidStep, values]);

  return {
    values,
    setValues,
    lastValidStep,
    setLastValidStep,
  };
};

export default useFormContextValue;
