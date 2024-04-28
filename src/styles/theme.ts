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
    redOpacity: "rgba(179, 74, 74, 0.6)",
    blueOpacity: "rgba(84, 145, 189, 0.6)",
    greyLightOpacity: "rgba(223, 217, 217, 0.65)",
  },
  fontStyles: {
    marcellusSC: "Marcellus SC",
    libreBodoni: "Libre Bodoni",
    lavishly: "Lavishly Yours",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "5px 5px 0px 0px",
          backgroundColor: "rgba(116, 109, 109, 0.5)",
          "--TextField-brandBorderColor": "#003366",
          "--TextField-brandBorderHoverColor": "#B2BAC2",
          "--TextField-brandBorderFocusedColor": "#FFFFFF",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&::before, &::after": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
          "&::placeholder": {
            color: "#FFFFFF",
          },
        },
      },
    },
  },
  status: {
    danger: "red",
  },
});

export default theme;
