import styled from "@emotion/styled";
import useResponsive from "@root/hooks/useResponsive";
import { ButtonProps, Button, Box } from "@mui/material";
import theme from "@styles/theme";
import React from "react";

export type Props = Omit<ButtonProps, "color">;

const MainButtonStyle = styled(Button)(() => ({
  "&.MuiButton-contained": {
    backgroundColor: theme.opacityColors.blueOpacity,
    fontSize: 20,
    borderRadius: 10,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      maxHeight: 40,
    },
  },
  "&.MuiButton-text": {
    fontSize: 20,
    borderRadius: 10,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      maxHeight: 40,
    },
  },
  "&.MuiButton-outlined": {
    borderRadius: 20,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      maxHeight: 40,
    },
  },
}));

const MainButton: React.FC<Props> = ({ children, ...args }) => {
  const { isMobileView } = useResponsive();
  return (
    <MainButtonStyle {...args}>
      <Box mx={isMobileView ? 1 : 5}>{children}</Box>
    </MainButtonStyle>
  );
};

export default MainButton;
