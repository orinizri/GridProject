import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map(column => {
          return (
            <th key={uuidv4()}>
              {column.title}
            </th>
          )
        })}
      </tr>
    </thead>
    <tbody>
      {data.map(row => {
        return (
          <tr key={uuidv4()}>
            {
              config.map(column => {
                return (
                  <td key={uuidv4()}>
                    <TableCell row={row} column={column} />
                  </td>
                )
              })
            }
          </tr>
        )
      })}

    </tbody>
  </table>
);

function TableCell({ row, column }) {
  let tableContent;
  if (row[column.field] && typeof row[column.field] === "object") {
    tableContent = Object.values(row[column.field])[0].startsWith('http') ?
            <a href={Object.values(row[column.field])}>{Object.values(row[column.field])}</a> :
            Object.values(row[column.field])
  } else {
    tableContent = row[column.field]
  } 
    return tableContent
}


export default Grid;