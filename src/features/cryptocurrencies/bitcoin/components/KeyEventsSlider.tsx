import { GetStartedForFreeIcon } from "@/components/Elements";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const useMaxWidth = () => {
  const theme = useTheme() as Theme;
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  if (isXs || isSm || isMd) return "xs";

  return "md"; // Default value for larger screens
};

export const KeyEventsSlider = () => {
  const maxWidth = useMaxWidth();

  const settings: Settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    dots: true,
  };

  return (
    <Container maxWidth={maxWidth}>
      <Slider {...settings}>
        <Paper>
          <Typography variant="h6">Slide 1</Typography>
          <GetStartedForFreeIcon />
        </Paper>
        <Paper>
          <Typography variant="h6">Slide 2</Typography>
          <GetStartedForFreeIcon />
        </Paper>
        <Paper>
          <Typography variant="h6">Slide 3</Typography>
          <GetStartedForFreeIcon />
        </Paper>
      </Slider>
    </Container>
  );
};
