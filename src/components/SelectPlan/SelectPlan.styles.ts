import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div``;

export const PlanTypes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const PlanType = styled.div<{ $isSelected: boolean }>`
  border: 1px solid ${(props) => props.theme.colors.neutral[1]};
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary[1]};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border: 1px solid ${(props) => props.theme.colors.primary[1]};
      background-color: ${(props) => props.theme.colors.neutral[2]};
    `}
`;

export const Description = styled.div`
  padding-top: 3rem;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.primary[0]};
`;

export const Price = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.neutral[0]};
  padding-top: 0.2rem;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[3]};
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: 0.25rem;
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.neutral[0]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const BillingType = styled.div<{ $isSelected?: boolean }>`
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      font-weight: ${(props) => props.theme.fontWeights.medium};
      color: ${(props) => props.theme.colors.primary[0]};
    `}
`;
