import { useContext } from 'react';
import FormContext from '.';
import { FormValuesType } from '../../types';

type FormContextData = {
  values: FormValuesType;
  setValues: React.Dispatch<React.SetStateAction<FormValuesType>>;
};

const useFormContext = (): FormContextData => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error(
      'useFormContext must be used within the FormContext.Provider'
    );
  }

  return formContext;
};

export default useFormContext;
