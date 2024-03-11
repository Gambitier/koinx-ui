import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { LowHighPriceIndicator } from "./LowHighPriceIndicator";
import {
  OverviewData,
  OverviewDataTable1,
  OverviewDataTable2,
} from "./OverviewData";

type TabPanelProps = {
  label: string;
  children?: React.ReactNode;
};
export const TabPanel: React.FC<TabPanelProps> = ({ label, children }) => {
  return (
    <Card sx={{ marginY: 2 }}>
      <CardHeader title={<Typography variant="h5">{label}</Typography>} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export const OverviewTabContent = () => {
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
