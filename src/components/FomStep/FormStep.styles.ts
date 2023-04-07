import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const ChildrenWrapper = styled.div`
  padding-top: 2.5rem;
`;
