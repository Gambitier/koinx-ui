import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { PriceChange } from "./PriceChange";

export const TrendingCoins = () => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h5">Trending Coins (24h)</Typography>}
      />
      <CardContent>
        <Stack direction="column" spacing={2}>
          <TrendingCoin />
          <TrendingCoin />
          <TrendingCoin />
        </Stack>
      </CardContent>
    </Card>
  );
};

function TrendingCoin() {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <CryptoIcon currencyCode={CurrencyCode.BTC} />
        <Typography>Bitcoin (BTC)</Typography>
      </Stack>
      <PriceChange changeDirection="increase" priceChange="2.51%" />
    </Stack>
  );
}
