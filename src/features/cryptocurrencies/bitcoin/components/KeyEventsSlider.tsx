import { GetStartedForFreeIcon } from "@/components/Elements";
import { Box, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const labels = ["Slide 1", "Slide 2", "Slide 3"];
function SliderItem({ label }: { label: string }) {
  return (
    <Paper>
      <Typography variant="h6">{label}</Typography>
      <GetStartedForFreeIcon />
    </Paper>
  );
}

export const KeyEventsSlider = () => {
  const theme = useTheme();
  const settings: Settings = {
    infinite: false,
    slidesToShow: 2,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.xs,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const containerMaxWidth = {
    // width issue: https://github.com/akiran/react-slick/issues/2275
    // xs: "900px", // this also worked, but wanted to avoid hardcoded values
    xs: theme.breakpoints.values.md,
    sm: theme.breakpoints.values.md,
    md: theme.breakpoints.values.md,
    lg: theme.breakpoints.values.lg,
    xl: theme.breakpoints.values.xl,
  };

  return (
    <Box maxWidth={containerMaxWidth}>
      <Slider {...settings}>
        {labels.map((label) => {
          return <SliderItem key={label} label={label} />;
        })}
      </Slider>
    </Box>
  );
};
