


export default function GridCell({ rowData, columnConfig }) {
    if (columnConfig.component) {
        return <columnConfig.component data={rowData[columnConfig.field]} />
    }
    return rowData[columnConfig.field];
};