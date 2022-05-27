import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import GridCell from '../GridCell/GridCell';

export default function GridBody({ data, config }) {
    return (
        <tbody>
            {data.map(rowData => {
                return (
                    <tr key={uuidv4()}>
                        {config.map(columnConfig => {
                            return (
                                <td key={uuidv4()}>
                                    <GridCell rowData={rowData} columnConfig={columnConfig} />
                                </td>)
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}
