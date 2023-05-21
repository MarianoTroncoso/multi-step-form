import { createContext } from 'react';
import { FormValuesType, Step } from '../../types';

export type FormContextData = {
  values: FormValuesType;
  setValues: React.Dispatch<React.SetStateAction<FormValuesType>>;
  lastValidStep: Step;
  setLastValidStep: React.Dispatch<React.SetStateAction<Step>>;
};
const FormContext = createContext<FormContextData | undefined>(undefined);

export default FormContext;
