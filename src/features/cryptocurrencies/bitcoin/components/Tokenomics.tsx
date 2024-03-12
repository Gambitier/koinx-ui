import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
  datasets: [
    {
      label: "# of Votes",
      data: [70, 30],
      backgroundColor: ["blue", "orange"],
      borderWidth: 0,
    },
  ],
};

export const Tokenomics = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h5">Tokenomics</Typography>} />
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6">Initial Distribution</Typography>
          <Stack direction="row" spacing={2}>
            <Box
              style={{
                width: "auto",
                height: 200,
              }}
            >
              <Doughnut
                data={data}
                options={{
                  cutout: 60, // thickness of Doughnut
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </Box>
            <Stack direction="column" spacing={2}>
              {/* TODO: show legends of graph,  */}
            </Stack>
          </Stack>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
