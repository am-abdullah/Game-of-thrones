import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const fontFamily = [
  "Graphik",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const fontFamilyHeading = `"Mortend",${fontFamily}`;

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#BC8C50",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
