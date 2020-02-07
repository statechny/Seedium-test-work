import styled from 'styled-components';

export const StyledSpinner = styled.span`
  border: 3px solid var(--blue);
  border-top: 3px solid white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 14px;
  animation: spin 0.4s linear infinite;
`;
