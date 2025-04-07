import { ReactNode } from "react";
import { m } from "framer-motion";
import { Box } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

import { varContainer } from "./variants";

interface MotionViewportProps {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
}

const MotionViewport: React.FC<MotionViewportProps> = ({
  children,
  disableAnimatedMobile = true,
  ...other
}) => {
  const isMobile = useResponsive("down", "md", "md");

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
};

export default MotionViewport;
