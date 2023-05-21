import React from 'react';
import { FastField, useField } from 'formik';
import * as SC from './Input.styles';

type Props = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onBlur?: () => void;
};

const Input: React.FC<Props> = ({ name, label, type, placeholder, onBlur }) => {
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
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                onBlur={onBlur}
              />
            </>
          )}
        </FastField>
      </SC.FastFieldWrapper>
    </SC.Wrapper>
  );
};

export default Input;
