import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    white: "#FFFFFF",
    gray: {
      700: "#1C1C1C",
      200: "#9E9E9E",
      100: "#DFDFDF",
      50: "#F0F0F0",
    },
    blue: {
      400: "#5984C0",
    },
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_500Medium",
    mono: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
