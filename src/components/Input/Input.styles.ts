import styled from 'styled-components';

export const Wrapper = styled.div`
  input {
    padding: 0 1rem;
    height: 2.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.neutral[1]};
    border-radius: 0.5rem;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[name='name'] {
    text-transform: capitalize;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary[0]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const FastFieldWrapper = styled.div``;

export const Error = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.danger};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const AboveInputContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;
