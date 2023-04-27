import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  width: 4.8rem;
  height: 2.5rem;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div<{ status: boolean }>`
  height: 1.3rem;
  width: 3rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.primary[0]};
  border: 0.1rem solid ${(props) => props.theme.colors.neutral[0]};
  transition: all 0.1s 0.1s ease-in;
  ${(props) =>
    props.status &&
    css`
      background-color: ${props.theme.colors.primary};
    `}
`;

export const Dot = styled.div<{ status: boolean }>`
  width: 0.805rem;
  height: 0.8rem;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  margin: auto auto auto 0;
  background-color: ${(props) => props.theme.colors.neutral[4]};
  position: absolute;
  border: 0.1rem solid ${(props) => props.theme.colors.neutral[0]};
  box-shadow: 0 0.3rem 0.8rem 0 rgba(0, 0, 0, 0.15);
  transform: translateX(-85%);
  transition: all 0.2s ease-in;
  ${(props) =>
    props.status &&
    css`
      transform: translateX(85%);
    `}
`;
