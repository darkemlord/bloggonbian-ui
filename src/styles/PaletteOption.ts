declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      text: string;
      mainBlue: string;
      blueDark: string;
      whiteOpacity: string;
      disabledGrey: string;
    };
    opacityColors: {
      background: string;
      greyOpacity: string;
      redOpacity: string;
      blueOpacity: string;
    };
    fontStyles: {
      marcellusSC: string;
      libreBodoni: string;
    };
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customColors?: {
      text?: string;
      mainBlue?: string;
      blueDark?: string;
      whiteOpacity?: string;
      disabledGrey?: string;
    };
    opacityColors?: {
      background?: string;
      greyOpacity?: string;
      redOpacity?: string;
      blueOpacity?: string;
    };
    fontStyles?: {
      marcellusSC?: string;
      libreBodoni?: string;
    };
    status?: {
      danger?: string;
    };
  }
}

export {};
