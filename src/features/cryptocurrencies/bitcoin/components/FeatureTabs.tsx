import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";

type TabPanelProps = {
  label: string;
  children?: React.ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = ({ label, children }) => {
  return (
    <Card sx={{ marginY: 2 }}>
      <CardHeader title={<Typography variant="h5">{label}</Typography>} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const LowHighPriceIndicator = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ whiteSpace: "nowrap" }}
    >
      <Stack direction="column">
        <Typography>Today's Low</Typography>
        <Typography>46,930.2</Typography>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="success" variant="determinate" value={70} />
      </Box>

      <Stack direction="column">
        <Typography>Today's High</Typography>
        <Typography>56,930.2</Typography>
      </Stack>
    </Stack>
  );
};

type OverviewData = {
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

const OverviewDataTable1 = ({
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

const OverviewDataTable2 = ({
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

const OverviewTabContent = () => {
  const data: OverviewData = {
    price: "$16,815.46",
    lastDayLow: "$16,382.07",
    lastDayHigh: "$16,874.12",
    last7DayLow: "$16,382.07",
    last7DayHigh: "$16,874.12",
    tradingVolume: "$23,249,202,782",
    marketCapRank: "#1",
    marketCap: "$323,507,290,047",
    marketCapDominanace: "38.343%",
    volumeMarketCap: "0.0718",
    allTimeHigh: "$69,044.77 -75.6%",
    allTimeLow: "$67.81 24729.1%",
  };

  return (
    <Stack direction="column" spacing={2}>
      <LowHighPriceIndicator />
      <LowHighPriceIndicator />
      <Box>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h5">Fundamentals</Typography>
            <InfoIcon />
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <OverviewDataTable1 {...data} />
            <OverviewDataTable2 {...data} />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const tabAndPanels = [
  { label: "Overview", component: <OverviewTabContent /> },
  { label: "Fundamentals", component: <OverviewTabContent /> },
  { label: "News Insights", component: <OverviewTabContent /> },
  { label: "Sentiments", component: <OverviewTabContent /> },
  { label: "Team", component: <OverviewTabContent /> },
  { label: "Technicals", component: <OverviewTabContent /> },
  { label: "Tokenomics", component: <OverviewTabContent /> },
];

function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabAndPanels.map((tab) => {
          return <Tab key={tab.label} label={tab.label} />;
        })}
      </Tabs>

      <SwipeableViews index={value} onChangeIndex={setValue}>
        {tabAndPanels.map((tab, _) => (
          <TabPanel key={tab.label} label={tab.label}>
            {tab.component}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export const FeatureTabs = () => {
  return <ScrollableTabsButtonAuto />;
};
