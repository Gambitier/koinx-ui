import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
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
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <Stack direction="row" spacing={1}>
          <CryptoIcon currencyCode={CurrencyCode.BTC} />
          <Typography>Bitcoin (BTC)</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <PriceChange changeDirection="increase" priceChange="2.51%" />
      </Grid>
    </Grid>
  );
}
