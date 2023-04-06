import React from 'react';
import * as SC from './StepListItem.styles';

type Props = {
  number: number;
  name: string;
  description: string;
};

const StepListItem: React.FC<Props> = ({ number, name, description }) => {
  return (
    <SC.Wrapper>
      <div>{number}</div>
      <div>{name}</div>
      <div>{description}</div>
    </SC.Wrapper>
  );
};

export default StepListItem;
