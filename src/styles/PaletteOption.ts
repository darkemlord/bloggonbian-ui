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
    };
    fontStyles: {
      marcellusSC: string;
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
    };
    fontStyles?: {
      marcellusSC: string;
    };
    status?: {
      danger?: string;
    };
  }
}

export {};
