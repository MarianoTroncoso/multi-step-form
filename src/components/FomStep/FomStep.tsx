import React from 'react';
import * as SC from './FormStep.styles';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
  showGoBackButton?: boolean;
  rightButtonText?: string;
};

const FormStep: React.FC<Props> = ({
  title,
  description,
  children,
  showGoBackButton = true,
  rightButtonText = 'Next Step',
}) => {
  return (
    <SC.Wrapper>
      <div>{title}</div>
      <div>{description}</div>
      {children}
    </SC.Wrapper>
  );
};

export default FormStep;
