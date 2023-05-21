import { useContext } from 'react';
import FormContext, { FormContextData } from '.';

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
