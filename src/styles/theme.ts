import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003366",
    },
  },
  customColors: {
    text: "#FFFFFF",
    mainBlue: "#003366",
    blueDark: "#082037",
    whiteOpacity: "rgba(255, 255, 255, 0.2)",
    disabledGrey: "#757575",
  },
  opacityColors: {
    background: "rgba(0, 0, 0, 0.62)",
    greyOpacity: "rgba(15, 15, 16, 0.5)",
  },
  fontStyles: {
    marcellusSC: "Marcellus SC",
  },
  status: {
    danger: "red",
  },
});

export default theme;
