import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";

type LowHighPriceIndicatorProps = {
  lowLabel: string;
  lowPrice: number;
  highLabel: string;
  highPrice: number;
  currentValue: number;
};

export const LowHighPriceIndicator: React.FC<LowHighPriceIndicatorProps> = ({
  lowLabel,
  lowPrice,
  highLabel,
  highPrice,
  currentValue,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ whiteSpace: "nowrap" }}
    >
      <Stack direction="column">
        <Typography>{lowLabel}</Typography>
        <Typography>{lowPrice}</Typography>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <LinearProgress
          color="success"
          variant="determinate"
          value={currentValue}
        />
      </Box>

      <Stack direction="column">
        <Typography>{highLabel}</Typography>
        <Typography>{highPrice}</Typography>
      </Stack>
    </Stack>
  );
};
