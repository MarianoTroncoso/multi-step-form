import styled from 'styled-components';

export const Wrapper = styled.div``;

export const PlanTypes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const PlanType = styled.div`
  border: 1px solid ${(props) => props.theme.colors.neutral[1]};
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary[1]};
    background-color: ${(props) => props.theme.colors.neutral[2]};
  }
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
