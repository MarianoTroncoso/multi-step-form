import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddOn = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.neutral[1]};
  border-radius: 0.5rem;
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
