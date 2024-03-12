import { Info } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { KeyEventsSlider } from "./KeyEventsSlider";

const BuySellHoldIndicator = ({
  action,
}: {
  action: string;
  percent: number;
}) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{action}</Typography>
      {/* TODO: add progress bar */}
    </Stack>
  );
};

export const Sentiment = () => {
  const BuySellHoldIndicatorData = [
    {
      action: "Buy",
      percent: 76,
    },
    {
      action: "Sell",
      percent: 76,
    },
    {
      action: "Hold",
      percent: 76,
    },
  ];

  return (
    <Card>
      <CardHeader title={<Typography variant="h5">Sentiment</Typography>} />
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6">Key Events</Typography>
              <Info />
            </Stack>
            <KeyEventsSlider />
          </Stack>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6">Analyst Estimates</Typography>
              <Info />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Avatar sx={{ width: 100, height: 100 }}>76%</Avatar>
              <Stack direction="column" spacing={1}>
                {BuySellHoldIndicatorData.map((item) => {
                  return <BuySellHoldIndicator key={item.action} {...item} />;
                })}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
