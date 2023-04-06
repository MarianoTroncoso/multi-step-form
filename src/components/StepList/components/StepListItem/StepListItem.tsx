import React from 'react';
import * as SC from './StepListItem.styles';

type Props = {
  number: number;
  name: string;
  description: string;
  isCurrentStep: boolean;
};

const StepListItem: React.FC<Props> = ({
  number,
  name,
  description,
  isCurrentStep,
}) => {
  return (
    <SC.Wrapper>
      <SC.Number $isCurrentStep={isCurrentStep}>{number}</SC.Number>
      <div>{name}</div>
      <div>{description}</div>
    </SC.Wrapper>
  );
};

export default StepListItem;
