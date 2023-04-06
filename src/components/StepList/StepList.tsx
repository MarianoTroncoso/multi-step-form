import React from 'react';
import * as SC from './StepList.styles';
import StepListItem from './components/StepListItem/StepListItem';

type Props = {};

const steps = [
  { number: 1, name: 'Step 1', description: 'You Info' },
  { number: 2, name: 'Step 2', description: 'Select Plan' },
  { number: 3, name: 'Step 3', description: 'Add-Ons' },
  { number: 4, name: 'Step 4', description: 'Summary' },
];

const StepList: React.FC<Props> = () => {
  return (
    <SC.Wrapper>
      {steps.map((step) => {
        const { number, name, description } = step;

        return (
          <StepListItem
            key={number}
            number={number}
            name={name}
            description={description}
          />
        );
      })}
    </SC.Wrapper>
  );
};

export default StepList;