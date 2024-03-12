import JohnSmith from "@/assets/JohnSmith.png";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";

const TeamMemberImage: React.FC = () => {
  return (
    <ImageList cols={1}>
      <ImageListItem>
        <img src={JohnSmith} alt="John Smith" />
        <ImageListItemBar
          position="below"
          title="John Smith"
          subtitle="Designation here"
          sx={{
            textAlign: "center",
          }}
        />
      </ImageListItem>
    </ImageList>
  );
};

const AboutTeamMember = () => {
  return (
    <Card
      elevation={0}
      sx={{ bgcolor: (theme) => theme.palette.highlight.light }}
    >
      <CardContent>
        <Box>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={6} sm={3} lg={2}>
              <TeamMemberImage />
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus
                sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                sociis laoreet nec neque sed pellentesque viverra. Consectetur
                proin amet ut id facilisi quis consectetur. Tellus gravida
                ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                etiam mi gravida praesent interdu
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export const AboutTeam = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h5">Team</Typography>} />
      <CardContent>
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
            nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
            quam. Facilisis purus convallis quam augue.
          </Typography>
          <AboutTeamMember />
          <AboutTeamMember />
          <AboutTeamMember />
        </Stack>
      </CardContent>
    </Card>
  );
};
