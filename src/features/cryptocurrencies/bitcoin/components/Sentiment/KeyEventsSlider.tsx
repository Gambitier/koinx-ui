import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import { Newspaper, TrendingUp } from "@mui/icons-material";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type SliderItemProps = {
  icon: React.ReactNode;
  heading: string;
  content: string;
};

const sliderItemContent: SliderItemProps[] = [
  {
    icon: <Newspaper fontSize="large" color="primary" />,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    icon: <TrendingUp fontSize="large" color="success" />,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del",
  },
  {
    icon: <CryptoIcon currencyCode={CurrencyCode.BTC} />,
    heading:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
];

const SliderItem = ({ heading, content, icon }: SliderItemProps) => {
  return (
    <Paper elevation={0} sx={{ marginRight: 2 }}>
      <Stack direction="row" spacing={2} padding={2}>
        <Box>{icon}</Box>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6">{heading}</Typography>
          <Typography variant="body2" textAlign="start">
            {content}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export const KeyEventsSlider = () => {
  const theme = useTheme();
  const settings: Settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xs,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
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
        {sliderItemContent.map((item, index) => {
          return <SliderItem key={index} {...item} />;
        })}
      </Slider>
    </Box>
  );
};
