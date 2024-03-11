import { GetStartedForFreeIcon } from "@/components/Elements";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const KeyEventsSlider = () => {
  const settings: Settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    dots: true,
  };

  return (
    <Container>
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
