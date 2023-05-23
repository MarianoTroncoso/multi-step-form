import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddOn = styled.div<{ $isChecked: boolean }>`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.neutral[1]};
  border-radius: 0.5rem;

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: ${(props) => props.theme.colors.neutral[2]};
      border: 1px solid ${(props) => props.theme.colors.primary[1]};
    `}
`;

export const Left = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.2rem;
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary[1]};
`;

export const CheckBoxWrapper = styled.div`
  padding: 0 1rem;

  display: flex;

  input[type='checkbox' i] {
    margin: 0 !important;
    width: 1.2rem !important;
  }
`;

export const Error = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
