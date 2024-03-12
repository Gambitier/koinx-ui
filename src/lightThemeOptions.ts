import { ThemeOptions } from "@mui/material";

const headingColor = "#0B1426";
const secondaryHeadingColor = "#5D667B";
const bodyTextColor = "#3E5765";

// https://mui.com/material-ui/customization/theming/
// https://mui.com/material-ui/customization/palette/
// https://zenoo.github.io/mui-theme-creator/
// https://m2.material.io/inline-tools/color/
export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: common.black,
    },
    // primary: blue,
    background: {
      default: "#EEF2F5",
    },
    divider: "#DEE1E6", // TODO: set border: 1px solid
  },
  typography: {
    h1: {
      color: headingColor,
    },
    h2: {
      color: headingColor,
    },
    h3: {
      color: headingColor,
    },
    h4: {
      color: headingColor,
    },
    h5: {
      color: headingColor,
    },
    h6: {
      color: headingColor,
    },
    subtitle1: {
      color: secondaryHeadingColor,
    },
    subtitle2: {
      color: secondaryHeadingColor,
    },
    body1: {
      color: bodyTextColor,
    },
    body2: {
      color: bodyTextColor,
    },
  },
};
