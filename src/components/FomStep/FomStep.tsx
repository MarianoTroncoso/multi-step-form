import React from 'react';
import * as SC from './FormStep.styles';
import { FIRST_STEP, FOURTH_STEP } from '../../constants';
import { Step } from '../../types';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
  onPrevious: () => void;
  onNext: () => void;
  step: Step;
};

const FormStep: React.FC<Props> = ({
  title,
  description,
  children,
  onPrevious,
  onNext,
  step,
}) => {
  const isFirstStep = step === FIRST_STEP;

  const isLastStep = step === FOURTH_STEP;

  return (
    <SC.Wrapper>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
      <SC.ChildrenWrapper>{children}</SC.ChildrenWrapper>
      <SC.FooterWrapper>
        {!isFirstStep && (
          <SC.BackButton onClick={onPrevious}>Go back</SC.BackButton>
        )}
        {!isLastStep && (
          <SC.NextButton onClick={onNext}>Next Step</SC.NextButton>
        )}
      </SC.FooterWrapper>
    </SC.Wrapper>
  );
};

export default FormStep;
