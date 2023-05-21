import React from 'react';
import * as SC from './PersonalInfo.styles';
import Input from '../Input';
import { FormFieldsEnum } from '../../enums';
import useFormContext from '../../context/formContext/useFormContext';
import { useFormikContext } from 'formik';
import { FormValuesType } from '../../types';

const PersonalInfo: React.FC = () => {
  const { values: formContextValues, setValues } = useFormContext();

  const { values } = useFormikContext<FormValuesType>();

  const handleBlur = ({ field }: { field: keyof FormValuesType }) => {
    const value = values[field];

    setValues({
      ...formContextValues,
      [field]: value,
    });
  };

  return (
    <SC.Wrapper>
      <Input
        name={FormFieldsEnum.NAME}
        label="Name"
        placeholder="e.g. Stephen King"
        onBlur={() => {
          handleBlur({ field: FormFieldsEnum.NAME as keyof FormValuesType });
        }}
      />
      <Input
        name={FormFieldsEnum.EMAIL}
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        onBlur={() => {
          handleBlur({ field: FormFieldsEnum.EMAIL as keyof FormValuesType });
        }}
      />
      <Input
        name={FormFieldsEnum.PHONE}
        label="Phone Number"
        type="number"
        placeholder="e.g. +1 234 567 890"
        onBlur={() => {
          handleBlur({ field: FormFieldsEnum.PHONE as keyof FormValuesType });
        }}
      />
    </SC.Wrapper>
  );
};

export default PersonalInfo;
