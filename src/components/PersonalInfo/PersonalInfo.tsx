import React from 'react';
import * as SC from './PersonalInfo.styles';

type Props = {};

const PersonalInfo: React.FC<Props> = () => {
  return (
    <SC.Wrapper>
      <div>Name</div>
      <div>Email Address</div>
      <div>Phone number</div>
    </SC.Wrapper>
  );
};

export default PersonalInfo;
