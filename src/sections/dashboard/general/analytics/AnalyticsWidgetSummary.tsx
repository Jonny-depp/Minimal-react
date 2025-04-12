import { FC } from "react";
import { alpha, useTheme, Theme } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { bgGradient } from "../../../../utils/cssStyles";
import { fShortenNumber } from "../../../../utils/formatNumber";
import Iconify from "../../../../components/iconify";

interface AnalyticsWidgetSummaryProps {
  sx?: SxProps<Theme>;
  icon: string;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  title: string;
  total: number;
}

const AnalyticsWidgetSummary: FC<AnalyticsWidgetSummaryProps> = ({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: theme.palette[color].dark,
        bgcolor: theme.palette[color].light,
        ...sx,
      }}
      {...other}
    >
      <Iconify
        icon={icon}
        sx={{
          mb: 3,
          p: 2.5,
          width: 64,
          height: 64,
          borderRadius: "50%",
          color: theme.palette[color].dark,
          ...bgGradient({
            direction: "135deg",
            startColor: `${alpha(theme.palette[color].dark, 0)} 0%`,
            endColor: `${alpha(theme.palette[color].dark, 0.24)} 100%`,
          }),
        }}
      />

      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.64 }}>
        {title}
      </Typography>
    </Card>
  );
};

export default AnalyticsWidgetSummary;
