import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Number = styled.div<{ $isCurrentStep: boolean }>`
  font-weight: ${({ $isCurrentStep, theme }) =>
    $isCurrentStep ? theme.fontWeights.bold : theme.fontWeights.normal};
`;
