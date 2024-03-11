import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

type RowData = {
  label: string;
  value: React.ReactNode;
};

type OverviewDataTableProps = {
  rows: RowData[];
};

const Row: React.FC<RowData> = ({ label, value }) => (
  <TableRow>
    <TableCell align="left">{label}</TableCell>
    <TableCell align="right">{value}</TableCell>
  </TableRow>
);

export const KeyValueDataTable: React.FC<OverviewDataTableProps> = ({
  rows: rowsData,
}) => (
  <TableContainer>
    <Table>
      <TableBody>
        {rowsData.map((rowData, index) => (
          <Row key={index} {...rowData} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
