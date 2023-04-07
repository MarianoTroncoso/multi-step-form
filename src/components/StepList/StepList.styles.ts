import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.primary[1]};
  border-radius: 0.5rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.neutral[4]};
`;
