import { GetStartedForFreeIcon } from "@/components/Elements";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

export const BrandAdvertisement = () => {
  return (
    <Card
      sx={{
        padding: 4,
        background: (theme) => theme.palette.highlight.main,
      }}
    >
      <CardHeader
        title={
          <Typography
            color="primary"
            variant="h4"
            align="center"
            style={{ textTransform: "none" }}
          >
            Get Started with KoinX for FREE
          </Typography>
        }
      />
      <CardContent>
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography color="primary" align="center">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </Typography>
          <GetStartedForFreeIcon />
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            <Typography variant="h6" style={{ textTransform: "none" }}>
              Get Started for FREE
            </Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
