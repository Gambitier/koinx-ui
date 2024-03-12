/* eslint-disable @typescript-eslint/consistent-type-definitions */
// createTheme.d.ts

import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette extends MuiPalette {
    highlight: MuiPalette["primary"] & {
      gradient: string;
      lightGradient: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    highlight: MuiPaletteOptions["primary"] & {
      gradient: string;
      lightGradient: string;
    };
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    highlight: true;
  }
}
