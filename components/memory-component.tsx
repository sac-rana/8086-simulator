import { useMemo, useState } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { useMemory } from '../lib/state';
import { decimalToHex16Bit } from '../lib/utils';

interface Row {
  [index: string]: string;
}

const getColumns = () => {
  const columns: Column<Row>[] = [{ key: 'id', name: '' }];
  for (let i = 0; i < 16; i++) {
    const col = i.toString(16).toUpperCase();
    columns.push({ key: col, name: col });
  }
  return columns;
};

export default function MemoryComponent() {
  const { memory } = useMemory();
  const [rows, setRows] = useState(() => {
    const rows: Row[] = [];
    for (let i = 0; i < 100; i++) {
      const row: Row = { id: i.toString(16).toUpperCase().padStart(3, '0') };
      for (let j = 0; j < 16; j++) {
        row[j.toString(16).toUpperCase()] = memory[i * 16 + j];
      }
      rows.push(row);
    }
    return rows;
  });
  const columns = useMemo(() => getColumns(), []);
  return <DataGrid columns={columns} rows={rows} />;
}
