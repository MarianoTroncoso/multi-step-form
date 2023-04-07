import styled, { css } from 'styled-components';
import { ButtonVariant } from '../../types';

export const Wrapper = styled.button<{ $variant: ButtonVariant }>`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: 'Ubuntu', sans-serif;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 0.4rem;

  ${({ $variant }) =>
    $variant === 'next'
      ? css`
          margin-left: auto;
          background-color: ${({ theme }) => theme.colors.primary[0]};
          color: ${({ theme }) => theme.colors.neutral[4]};
          :hover {
            filter: brightness(150%);
          }
        `
      : css`
          margin-right: auto;
          background-color: transparent;
          color: ${({ theme }) => theme.colors.neutral[0]};
          :hover {
            color: ${({ theme }) => theme.colors.primary[0]};
          }
        `};
`;
