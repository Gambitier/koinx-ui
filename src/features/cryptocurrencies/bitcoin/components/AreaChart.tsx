import { fakerDE as faker } from "@faker-js/faker";
import { Box, Chip, Grid, ListItem, Stack, Typography } from "@mui/material";
import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide vertical lines for the x-axis
      },
    },
    y: {
      grid: {
        display: true, // You can choose to show/hide vertical lines for the y-axis
      },
      ticks: {
        display: true, // Hide Y-axis ticks and labels
      },
      beginAtZero: true,
    },
  },
};

const labels = ["1H", "24H", "7D", "1M", "3M", "1Y", "ALL"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const AreaChart = () => {
  const [activeLabel, _] = useState(labels[0]); // State to track the active list item index

  return (
    <Stack direction="column">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Bitcoin Price Chart (USD)</Typography>
        </Grid>
        <Grid item xs={3} sm={6}>
          <Stack
            direction="row"
            spacing={0}
            component="ul"
            margin={0}
            padding={0}
          >
            {labels.map((label) => {
              return (
                <ListItem key={label} style={{ padding: 0 }}>
                  <Chip
                    label={label}
                    sx={{
                      color: `${activeLabel === label ? "blue" : undefined}`,
                    }}
                  />
                </ListItem>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
      <Box marginY={2}>
        <Line options={options} data={data} />
      </Box>
    </Stack>
  );
};
