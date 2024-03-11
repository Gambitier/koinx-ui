import { Info } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { LowHighPriceIndicator } from "./LowHighPriceIndicator";
import {
  OverviewData,
  OverviewDataTable1,
  OverviewDataTable2,
} from "./OverviewData";

export const OverviewTabContent = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Typography color="error">
        TODO: 2 Progress Bar should be aligned over one another{" "}
      </Typography>
      <LowHighPriceIndicator
        lowLabel="Today's Low"
        lowPrice={46930.2}
        highLabel="Today's High"
        highPrice={56930.2}
        currentValue={70}
      />
      <LowHighPriceIndicator
        lowLabel="52W Low"
        lowPrice={46930.2}
        highLabel="52W High"
        highPrice={56930.2}
        currentValue={70}
      />
      <OverviewTabTable />
    </Stack>
  );
};

export const OverviewTabTable = () => {
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
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h5">Fundamentals</Typography>
        <Info />
      </Stack>
      <Stack direction="row" spacing={1}>
        <OverviewDataTable1 {...data} />
        <OverviewDataTable2 {...data} />
      </Stack>
    </Stack>
  );
};
