import JohnSmith from "@/assets/JohnSmith.png";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const TeamMemberImage: React.FC = () => {
  return (
    <ImageList>
      <ImageListItem>
        <img
          src={JohnSmith}
          alt="John Smith"
          style={{ width: "100%", height: "auto" }}
        />
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
    <Paper sx={{ padding: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box>
          <TeamMemberImage />
        </Box>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </Typography>
      </Stack>
    </Paper>
  );
};

export const AboutTeam = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h5">Team</Typography>} />
      <CardContent>
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography variant="body1">
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
