import React from 'react';
import './Table.css';

const Table = ({ tHeads, tRows, className = 'Table' }) => {
  const tableHeads = tHeads.map((tHead, index) => (
    <th role="columnheader" className={`${className}__td`} key={index}>
      {tHead}
    </th>
  ));
  const tableRows = tRows.map((tRow, index) => (
    <tr className={`${className}__tr`} key={index}>
      {tRow}
    </tr>
  ));
  return (
    <table className={`${className} sort`}>
      <thead className={`${className}__thead`}>
        <tr className={`${className}__tr`}>{tableHeads}</tr>
      </thead>
      <tbody className={`${className}__tbody`}>{tableRows}</tbody>
    </table>
  );
};

export default Table;
