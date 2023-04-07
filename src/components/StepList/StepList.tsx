import React from 'react';
import * as SC from './StepList.styles';
import StepListItem from './components/StepListItem/StepListItem';
import {
  FIRST_STEP,
  FOURTH_STEP,
  SECOND_STEP,
  THIRD_STEP,
} from '../../constants';

type Props = {
  currentStep: number;
};

const steps = [
  { number: FIRST_STEP, name: 'Step 1', description: 'You Info' },
  { number: SECOND_STEP, name: 'Step 2', description: 'Select Plan' },
  { number: THIRD_STEP, name: 'Step 3', description: 'Add-Ons' },
  { number: FOURTH_STEP, name: 'Step 4', description: 'Summary' },
];

const StepList: React.FC<Props> = ({ currentStep }) => {
  return (
    <SC.Wrapper>
      {steps.map((step) => {
        const { number, name, description } = step;

        const isCurrentStep = number === currentStep;

        return (
          <StepListItem
            key={number}
            number={number}
            name={name}
            description={description}
            isCurrentStep={isCurrentStep}
          />
        );
      })}
    </SC.Wrapper>
  );
};

export default StepList;
