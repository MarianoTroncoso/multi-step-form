import styled from 'styled-components';

export const Table = styled.div``;

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[2]};
  padding: 1.5rem;
  border-radius: 0.5rem;

  hr {
    margin: 0 !important;
    border: 1px solid ${({ theme }) => theme.colors.neutral[1]};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const FooterLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.neutral[0]};
`;

export const FooterPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary[1]};
`;

export const PlanSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

export const PlanSummaryTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary[0]};
`;

export const PlanSummaryPrice = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const AddOnsSummary = styled.div`
  padding-top: 1rem;
`;

export const AddOnItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.6rem;
`;

export const AddOnName = styled.div`
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const AddOnPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary[0]};
`;
