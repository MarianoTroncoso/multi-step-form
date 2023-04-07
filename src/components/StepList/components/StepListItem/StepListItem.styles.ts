import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  cursor: pointer;
`;

export const Number = styled.div<{ $isCurrentStep: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.neutral[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ $isCurrentStep }) =>
    $isCurrentStep &&
    css`
      background-color: ${({ theme }) => theme.colors.primary[3]};
      color: ${({ theme }) => theme.colors.primary[1]};
      border: 1px solid ${({ theme }) => theme.colors.primary[3]};
    `}
`;

export const RightContent = styled.div`
  text-transform: uppercase;

  > :first-child {
    color: ${({ theme }) => theme.colors.neutral[0]};
  }

  > :nth-child(2) {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-top: 0.1rem;
  }
`;
