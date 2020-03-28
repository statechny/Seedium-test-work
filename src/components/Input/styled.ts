import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 8px 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid var(--border);
  transition: border 0.2s, box-shadow 0.2s;
  &::placeholder {
    font-family: 'Proxima Nova', sans-serif;
    font-size: 16px;
    line-height: 24px;
  }
  &:focus {
    outline: none;
    border: 1px solid var(--blue);
    box-shadow: 0 0 0 1px var(--blue);
  }
`;
