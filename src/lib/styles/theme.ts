import { queries } from "./media";

const colors = {
  BLEACHED_SILK: "#f2f2f2",
  BLACK_OUT: "#0a192f",
  PALLADIUM: "#b2b2b2",
  DIRE_WOLF: "#272627",
  WHITE: "#ffffff",
  CARBON: "#333333",
  SQUANT: "#666666",
  TIMBER_WOLF: "#F2FDFF",
  DARK_NAVY: "#020C1B",
  NAVY: "#0A192F",
  LIGHT_NAVY: "#112240",
  LIGHTEST_NAVY: "#233554",
  DARK_SLATE: "#495670",
  SLATE: "#C1CFF8",
  LIGHT_SLATE: "#A8B2D1",
  LIGHTEST_SLATE: "#D1D9F4",
  GREEN: "#64FFDA",
  GREEN_TINT: "RGBA(100, 255, 218, 0.1)",
  PINK: "#F57DFF",
  BLUE: "#57CBFF",
};

const fonts = {
  primary: "Calibre",
};

const darkTheme = {
  palette: {
    text: colors.SLATE,
    contrastText: colors.GREEN,
    body: colors.BLACK_OUT,
    header: colors.LIGHTEST_SLATE,
  },
};

const lightTheme = {
  palette: {
    text: colors.CARBON,
    contrastText: colors.CARBON,
    body: colors.WHITE,
  },
};

export default {
  colors,
  fonts,
  darkTheme,
  lightTheme,
  queries,
};
