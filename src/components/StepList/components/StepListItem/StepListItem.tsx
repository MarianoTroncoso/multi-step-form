import React from 'react';
import * as SC from './StepListItem.styles';

type Props = {
  number: number;
  name: string;
  description: string;
  isCurrentStep: boolean;
  onClick: () => void;
};

const StepListItem: React.FC<Props> = ({
  number,
  name,
  description,
  isCurrentStep,
  onClick,
}) => {
  return (
    <SC.Wrapper onClick={onClick}>
      <SC.Number $isCurrentStep={isCurrentStep}>{number}</SC.Number>
      <SC.RightContent>
        <div>{name}</div>
        <div>{description}</div>
      </SC.RightContent>
    </SC.Wrapper>
  );
};

export default StepListItem;
