import { GetStartedForFreeIcon } from "@/components/Elements";
import { ArrowRightAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export const AboutCoin = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h5">About Coin</Typography>} />
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Typography variant="h6">What is Bitcoin?</Typography>
          <Typography variant="body2">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </Typography>
          <Divider />
          <Typography variant="h6">Lorem ipsum dolor sit amet</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </Typography>
          <Typography variant="body2">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </Typography>
          <Typography variant="body2">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </Typography>
          <Divider />
          <Typography variant="h6">Already Holding Bitcoin?</Typography>
          <Box>
            <Grid
              container
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Grid item sm={6}>
                <CalculateValue />
              </Grid>
              <Grid item sm={6}>
                <CalculateValue />
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Typography variant="body2">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

function CalculateValue() {
  return (
    <Card elevation={0} sx={{ bgcolor: "#79F1A4" }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <GetStartedForFreeIcon />
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" textAlign="center">
              Calculate your Profits
            </Typography>
            <Button sx={{ bgcolor: "white" }} endIcon={<ArrowRightAlt />}>
              Check Now
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
