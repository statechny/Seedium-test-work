import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  padding: 16px 28px;
  color: white;
  font-size: 16px;
  background-color: var(--blue);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--blue-hover);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    pointer-events: none;
    background-color: var(--blue);
    color: var(--blue);
  }
`;
