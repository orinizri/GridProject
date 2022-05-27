import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import GridBody from '../GridBody/GridBody';
import GridHeaders from '../GridHeaders/GridHeaders';


const Grid = ({ config, data }) => (
  <table>
        <GridHeaders config={config} />
        <GridBody data={data} config={config} />
  </table>
);


export default Grid;