import React from 'react';

import { StyledTable } from './styled';
import TableModel from './model';

const Table: React.FunctionComponent<TableModel> = ({ academies }) => {
  const tableBody = academies.map((academy: any) => {
    const { title, type, created, metrics } = academy;
    const createdDate = new Date(created).toLocaleDateString();
    return (
      <tr>
        <td>{title}</td>
        <td>{type}</td>
        <td>{createdDate}</td>
        <td>{metrics.rating ? metrics.rating : 'unrated'}</td>
        <td>{metrics.playerNumber ? metrics.playerNumber : 'no players'}</td>
      </tr>
    );
  });
  return (
    <StyledTable>
      <tbody>{tableBody}</tbody>
    </StyledTable>
  );
};

export default Table;
