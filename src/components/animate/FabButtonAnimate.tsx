import { m } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { Box, Fab } from "@mui/material";
import { SxProps } from "@mui/system";

interface AnimateWrapProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  sxWrap?: SxProps;
}

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 },
};

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 },
};

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 },
};

const AnimateWrap: React.FC<AnimateWrapProps> = ({
  children,
  size = "medium",
  sxWrap,
}) => {
  const variants =
    size === "small" ? varSmall : size === "large" ? varLarge : varMedium;

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={variants}
      sx={{
        display: "inline-flex",
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
};

interface FabButtonAnimateProps {
  children: ReactNode;
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  sxWrap?: SxProps;
}

const FabButtonAnimate = forwardRef<HTMLButtonElement, FabButtonAnimateProps>(
  ({ children, size = "large", sx, sxWrap, ...other }, ref) => (
    <AnimateWrap size={size} sxWrap={sxWrap}>
      <Fab ref={ref} size={size} sx={sx} {...other}>
        {children}
      </Fab>
    </AnimateWrap>
  )
);

export default FabButtonAnimate;
