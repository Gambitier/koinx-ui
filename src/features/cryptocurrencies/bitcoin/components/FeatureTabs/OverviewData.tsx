import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export type OverviewData = {
  price: string;
  lastDayLow: string;
  lastDayHigh: string;
  last7DayLow: string;
  last7DayHigh: string;
  tradingVolume: string;
  marketCapRank: string;
  marketCap: string;
  marketCapDominanace: string;
  volumeMarketCap: string;
  allTimeHigh: string;
  allTimeLow: string;
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <TableRow>
    <TableCell align="left">{label}</TableCell>
    <TableCell align="right">{value}</TableCell>
  </TableRow>
);

export const OverviewDataTable1 = ({
  price,
  last7DayHigh,
  last7DayLow,
  lastDayHigh,
  lastDayLow,
  tradingVolume,
  marketCapRank,
}: OverviewData) => {
  const rows = [
    { label: "Price", value: price },
    {
      label: "24d Low / 24d High",
      value: `${lastDayLow} / ${lastDayHigh}`,
    },
    {
      label: "7d Low / 7d High",
      value: `${last7DayLow} / ${last7DayHigh}`,
    },
    { label: "Trading Volume", value: tradingVolume },
    { label: "Market Cap Rank", value: marketCapRank },
  ];

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((rowData, index) => (
            <Row key={index} {...rowData} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const OverviewDataTable2 = ({
  marketCap,
  marketCapDominanace,
  volumeMarketCap,
  allTimeHigh,
  allTimeLow,
}: OverviewData) => {
  const rowsData = [
    { label: "Market Cap", value: marketCap },
    { label: "Market Cap Dominance", value: marketCapDominanace },
    { label: "Volume / Market Cap", value: volumeMarketCap },
    { label: "All-Time High", value: allTimeHigh },
    { label: "All-Time Low", value: allTimeLow },
  ];

  return (
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
};
