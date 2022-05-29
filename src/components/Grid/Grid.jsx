import React from 'react';
import GridCell from '../GridCell/GridCell';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((column, index) =>
          <th key={index}>
            {column.title}
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      {data.map((rowData, index) =>
        <tr key={index}>
          {config.map((columnConfig, index) =>
            <td key={index}>
              <GridCell rowData={rowData} columnConfig={columnConfig} />
            </td>)}
        </tr>
      )}
    </tbody>
  </table>);

export default Grid;