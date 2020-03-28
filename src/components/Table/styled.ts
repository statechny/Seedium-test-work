import styled from 'styled-components';

export const StyledTable = styled.table`
  border-radius: 4px;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  & tr:nth-child(even) {
    background-color: #fafafa;
  }
  & td {
    padding: 12px 8px;
    width: 20%;
  }
`;
