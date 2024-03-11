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
export const OverviewDataTable1 = ({
  price,
  last7DayHigh,
  last7DayLow,
  lastDayHigh,
  lastDayLow,
  tradingVolume,
  marketCapRank,
}: OverviewData) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>{price}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>24d Low / 24d High</TableCell>
            <TableCell>{`${lastDayLow} / ${lastDayHigh}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7d Low / 7d High</TableCell>
            <TableCell>{`${last7DayLow} / ${last7DayHigh}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Trading Volume</TableCell>
            <TableCell>{tradingVolume}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Market Cap Rank</TableCell>
            <TableCell>{marketCapRank}</TableCell>
          </TableRow>
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
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Market Cap</TableCell>
            <TableCell>{marketCap}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Market Cap Dominance</TableCell>
            <TableCell>{marketCapDominanace}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Volume / Market Cap</TableCell>
            <TableCell>{volumeMarketCap}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>All-Time High</TableCell>
            <TableCell>{allTimeHigh}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>All-Time Low</TableCell>
            <TableCell>{allTimeLow}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
