import { createContext } from 'react';
import { FormValuesType } from '../../types';

export type FormContextData = {
  values: FormValuesType;
  setValues: React.Dispatch<React.SetStateAction<FormValuesType>>;
};

const FormContext = createContext<FormContextData | undefined>(undefined);

export default FormContext;
