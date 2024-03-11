import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export const LowHighPriceIndicator = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ whiteSpace: "nowrap" }}
    >
      <Stack direction="column">
        <Typography>Today's Low</Typography>
        <Typography>46,930.2</Typography>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="success" variant="determinate" value={70} />
      </Box>

      <Stack direction="column">
        <Typography>Today's High</Typography>
        <Typography>56,930.2</Typography>
      </Stack>
    </Stack>
  );
};
