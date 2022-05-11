import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map(column => {
          return (
            <th key={column.title}>
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
                // TODO: make dynamic by mapping over the object key and values 
                if (typeof row[column.field] === "object") {
                  return (
                    (
                      <td key={row[column.field].url}>{
                        Object.values(row[column.field])[0].startsWith('http') ?
                          <a href={Object.values(row[column.field])}>{Object.values(row[column.field])}</a> :
                          Object.values(row[column.field])
                      }</td>
                    )
                  )
                }
                return (
                  <td key={row[column.field]}>
                    {row[column.field]}
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