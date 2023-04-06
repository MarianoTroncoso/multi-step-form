import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid black;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// TODO: create Button component
export const Button = styled.button``;

export const BackButton = styled(Button)`
  margin-right: auto;
`;

export const NextButton = styled(Button)`
  margin-left: auto;
`;
