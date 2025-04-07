import { m } from "framer-motion";
import { Box, BoxProps } from "@mui/material";
import { varContainer } from "./variants";
import { ReactNode } from "react";
interface MotionContainerProps extends BoxProps {
  action?: boolean;
  animate?: boolean;
  children: ReactNode;
}
export default function MotionContainer({
  animate,
  action = false,
  children,
  ...other
}: MotionContainerProps) {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? "animate" : "exit"}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
