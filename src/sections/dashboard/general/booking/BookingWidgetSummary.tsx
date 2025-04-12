import { Card, Typography, Box, SxProps } from "@mui/material";
import { fShortenNumber } from "../../../../utils/formatNumber";
import { ReactNode } from "react";

interface BookingWidgetSummaryProps {
  icon: ReactNode;
  sx?: SxProps;
  title: string;
  total: number;
}

export default function BookingWidgetSummary({
  title,
  total,
  icon,
  sx,
  ...other
}: BookingWidgetSummaryProps) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        pl: 3,
        ...sx,
      }}
      {...other}
    >
      <div>
        <Typography variant="h3">{fShortenNumber(total)}</Typography>

        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          {title}
        </Typography>
      </div>

      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: "50%",
          bgcolor: "background.neutral",
        }}
      >
        {icon}
      </Box>
    </Card>
  );
}
