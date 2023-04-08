import React from 'react';
import * as SC from './PersonalInfo.styles';
import Input from '../Input';

type Props = {};

const PersonalInfo: React.FC<Props> = () => {
  return (
    <SC.Wrapper>
      <Input name="name" label="Name" />
      <Input name="email" label="Email Address" />
      <Input name="phone" label="Phone Number" type="number" />
    </SC.Wrapper>
  );
};

export default PersonalInfo;
