export default function GridCell({ row, column }) {
    let tableContent;
    if (typeof row[column.field] === "object") {
        tableContent = Object.values(row[column.field])[0].startsWith('http') ?
            <a href={Object.values(row[column.field])}>{Object.values(row[column.field])}</a> :
            Object.values(row[column.field]);
    } else {
        tableContent = row[column.field] || '';
    }
    return tableContent
};