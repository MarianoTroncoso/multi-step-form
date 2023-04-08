import React from 'react';
import { FastField, useField } from 'formik';
import * as SC from './Input.styles';

type Props = {
  name: string;
  label?: string;
  type?: string;
};

const Input: React.FC<Props> = ({ name, label, type }) => {
  const [field, meta] = useField({ name });

  const { error } = meta;

  return (
    <SC.Wrapper>
      <SC.FastFieldWrapper>
        <FastField name={name}>
          {() => (
            <>
              <SC.AboveInputContent>
                {label && <SC.Label htmlFor={name}>{label}</SC.Label>}
                {error && <SC.Error>{error}</SC.Error>}
              </SC.AboveInputContent>
              <input {...field} type={type} />
            </>
          )}
        </FastField>
      </SC.FastFieldWrapper>
    </SC.Wrapper>
  );
};

export default Input;
