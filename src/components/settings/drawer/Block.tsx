import { Stack, Tooltip, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { ReactNode } from "react";
import Iconify from "../../iconify";

interface BlockProps {
  sx?: SxProps;
  title?: string;
  tooltip?: string;
  children?: ReactNode;
}
const SPACING = 2.5;

const Block = ({ sx, title, tooltip, children, ...other }: BlockProps) => {
  return (
    <Stack spacing={1.5} sx={{ mb: SPACING, ...sx }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          color: "text.secondary",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "fontWeightMedium" }}>
          {title}
        </Typography>

        {tooltip && (
          <Tooltip title={tooltip}>
            <Iconify icon="eva:info-outline" width={16} sx={{ mx: 0.5 }} />
          </Tooltip>
        )}
      </Stack>

      {children}
    </Stack>
  );
};
export default Block;
