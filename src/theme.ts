import { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material" {
  interface DefaultTheme extends Theme {}
}

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: "#C743EE",
      contrastText: "#fff",
    },

    secondary: {
      main: "#C743EE",
    },

    text: {
      primary: "#C743EE",
      secondary: "#C743EE",
    },
    error: {
      main: "#ef5350",
    },
    warning: {
      main: "#FF5147",
    },

    action: {
      active: "#C742EE",
      hover: "#00000",
      disabledBackground: "#C742EE",
      disabled: "",
    },
  },
  typography: {
    fontFamily: "mulish, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
