import { ContentLayout } from "@/components/Layout";
import { Grid, Stack } from "@mui/material";
import { AboutCoin } from "../components/AboutCoin";
import { AboutTeam } from "../components/AboutTeam";
import { BrandAdvertisement } from "../components/BrandAdvertisement";
import { CoinOverview } from "../components/CoinOverview";
import { CryptoBreadcrumb } from "../components/CryptoBreadcrumb";
import { FeatureTabs } from "../components/FeatureTabs";
import { Sentiment } from "../components/Sentiment";
import { Tokenomics } from "../components/Tokenomics";
import { TrendingCoins } from "../components/TrendingCoins";

// This component just wraps single or multiple components under one layout
const Bitcoin = () => {
  return (
    <ContentLayout title="Bitcoin">
      <CryptoBreadcrumb />
      <Grid container marginTop={2} spacing={2}>
        {/* First Column */}
        <Grid item xs={12} md={8}>
          <Stack>
            <CoinOverview />
            <FeatureTabs />
            <Sentiment />
            <AboutCoin />
            <Tokenomics />
            <AboutTeam />
          </Stack>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={4}>
          <Stack>
            <BrandAdvertisement />
            <TrendingCoins />
          </Stack>
        </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default Bitcoin;
