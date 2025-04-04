import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import { Box, type BoxProps, type SxProps } from "@mui/material";

interface IconifyProps extends Omit<BoxProps, "component"> {
  icon: string;
  width?: number | string;
  sx?: SxProps;
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component="span"
      sx={{ width, height: width, display: "inline-flex", ...sx }}
      {...other}
    >
      <Icon icon={icon} width={width} height={width} />
    </Box>
  )
);
export default Iconify;
