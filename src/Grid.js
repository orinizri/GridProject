import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map(column => {
          return (
            <th>
              {column.title}
            </th>
          )
        })}
      </tr>
    </thead>
    <tbody>
      {data.map(row => {
        return (
          <>
            <tr>
              {
                config.map(column => {
                  // TODO: make dynamic by mapping over the object keys and values 
                  if (row[column.field].hasOwnProperty('url')) {
                    return (
                      (
                        <td key={row[column.field].url}>{row[column.field].url}</td>
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
          </>
        )
      })}

    </tbody>
  </table>
);

export default Grid;