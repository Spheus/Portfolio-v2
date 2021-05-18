const colors = {
  BLEACHED_SILK: "#f2f2f2",
  BLACK_OUT: "#222222",
  PALLADIUM: "#b2b2b2",
  DIRE_WOLF: "#272627",
  WHITE: "#ffffff",
  CARBON: "#333333",
  SQUANT: "#666666",
};

const fonts = {
  primary:
    "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
};

const darkTheme = {
  palette: {
    text: colors.BLEACHED_SILK,
    contrastText: colors.PALLADIUM,
    body: colors.BLACK_OUT,
  },
};

const lightTheme = {
  palette: {
    text: colors.CARBON,
    contrastText: colors.SQUANT,
    body: colors.WHITE,
  },
};

export default {
  colors,
  fonts,
  darkTheme,
  lightTheme,
};
