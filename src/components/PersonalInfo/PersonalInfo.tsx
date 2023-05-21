import React from 'react';
import * as SC from './PersonalInfo.styles';
import Input from '../Input';
import { FormFieldsEnum } from '../../enums';

const PersonalInfo: React.FC = () => {
  return (
    <SC.Wrapper>
      <Input
        name={FormFieldsEnum.NAME}
        label="Name"
        placeholder="e.g. Stephen King"
      />
      <Input
        name={FormFieldsEnum.EMAIL}
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input
        name={FormFieldsEnum.PHONE}
        label="Phone Number"
        type="number"
        placeholder="e.g. +1 234 567 890"
      />
    </SC.Wrapper>
  );
};

export default PersonalInfo;
