import React from 'react';
import * as SC from './PersonalInfo.styles';
import Input from '../Input';

type Props = {};

const PersonalInfo: React.FC<Props> = () => {
  return (
    <SC.Wrapper>
      <Input name="name" label="Name" placeholder="e.g. Stephen King" />
      <Input
        name="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input
        name="phone"
        label="Phone Number"
        type="number"
        placeholder="e.g. +1 234 567 890"
      />
    </SC.Wrapper>
  );
};

export default PersonalInfo;
