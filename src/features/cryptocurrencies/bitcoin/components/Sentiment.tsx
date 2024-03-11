import { Info } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

export const Sentiment = () => {
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
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6">Key Events</Typography>
              <Info />
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h6">Analyst Estimates</Typography>
              <Info />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              // TODO: display graphs here
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
