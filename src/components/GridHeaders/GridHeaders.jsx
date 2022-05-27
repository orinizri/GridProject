import React from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function GridHeaders({ config }) {
    return (
        <thead>
            <tr>
                {
                    config.map(column => {
                        return (
                            <th key={uuidv4()}>
                                {column.title}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}
