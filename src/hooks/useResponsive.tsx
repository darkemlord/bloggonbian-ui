import { useMediaQuery, useTheme } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktopView = useMediaQuery(theme.breakpoints.up("sm"));
  return {
    isMobileView,
    isDesktopView,
  };
};

export default useResponsive;
