import React from 'react';
import * as SC from './Button.styles';
import { ButtonVariant } from '../../types';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
};

const Button: React.FC<Props> = ({ children, onClick, variant = 'next' }) => {
  return (
    <SC.Wrapper onClick={onClick} $variant={variant}>
      {children}
    </SC.Wrapper>
  );
};

export default Button;
