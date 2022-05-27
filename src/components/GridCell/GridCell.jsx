


export default function GridCell({ rowData, columnConfig }) {
    if (columnConfig.component) {
        return <columnConfig.component data={Object.values(rowData[columnConfig.field])} />
    }
    return rowData[columnConfig.field];
};