import React from 'react'
import GridCell from '../GridCell/GridCell';

export default function GridBody({ data, config }) {
    return (
        <tbody>
            {data.map((rowData, index) => {
                return (
                    <tr key={index}>
                        {config.map((columnConfig, index) => {
                            return (
                                <td key={index}>
                                    <GridCell rowData={rowData} columnConfig={columnConfig} />
                                </td>)
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}
