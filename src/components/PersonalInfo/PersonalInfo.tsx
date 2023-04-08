import React from 'react';
import * as SC from './PersonalInfo.styles';
import { FastField } from 'formik';

type Props = {};

const PersonalInfo: React.FC<Props> = () => {
  return (
    <SC.Wrapper>
      <div>
        <FastField name="name" />
      </div>
      <div>
        <FastField name="email" />
      </div>
      <div>
        <FastField name="phone" />
      </div>
    </SC.Wrapper>
  );
};

export default PersonalInfo;
