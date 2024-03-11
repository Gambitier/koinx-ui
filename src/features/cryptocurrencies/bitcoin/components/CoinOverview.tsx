import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { AreaChart } from "./AreaChart";
import { PriceChange } from "./PriceChange";

export const CoinOverview = () => {
  return (
    <Card>
      <CardHeader
        avatar={<CryptoIcon currencyCode={CurrencyCode.BTC} />}
        title={
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">Bitcoin</Typography>
            <Typography variant="subtitle1">BTC</Typography>
            <Chip label="Rank #1" />
          </Stack>
        }
      />
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h4">$46,953</Typography>
          <PriceChange changeDirection="increase" priceChange="2.51" />
        </Stack>
        <Stack direction="row" alignItems="center">
          <CurrencyRupeeIcon fontSize="small" />
          <Typography>39,42,343</Typography>
        </Stack>
        <Divider sx={{ marginY: 2 }} />
        <AreaChart />
      </CardContent>
    </Card>
  );
};
