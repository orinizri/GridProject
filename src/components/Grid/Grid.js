import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import GridCell from '../GridCell/GridCell';


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
                    <GridCell row={row} column={column} />
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


export default Grid;