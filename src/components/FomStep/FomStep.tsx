import React from 'react';
import * as SC from './FormStep.styles';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
  onPrevious: () => void;
  onNext: () => void;
  step: number;
};

const FormStep: React.FC<Props> = ({
  title,
  description,
  children,
  onPrevious,
  onNext,
  step,
}) => {
  const isFirstStep = step === 1;

  const isLastStep = step === 4;

  return (
    <SC.Wrapper>
      <div>{title}</div>
      <div>{description}</div>
      {children}
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
