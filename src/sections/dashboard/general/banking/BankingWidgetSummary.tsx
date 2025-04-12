import { SxProps, useTheme } from "@mui/material/styles";
import { Card, Typography, Stack, Box } from "@mui/material";
import { fCurrency, fPercent } from "../../../../utils/formatNumber";
import Iconify from "../../../../components/iconify";
import Chart, { useChart } from "../../../../components/chart";
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
interface BankingWidgetSummaryProps {
  sx?: SxProps;
  chart: any;
  color?: keyof Palette;
  title: string;
  total: number;
  percent: number;
  icon: any;
}

export default function BankingWidgetSummary({
  title,
  total,
  icon,
  percent,
  color = "primary",
  chart,
  sx,
  ...other
}: BankingWidgetSummaryProps) {
  const theme = useTheme();
  const paletteColor = theme.palette[color] as PaletteColor;
  const { series, options } = chart;
  const chartOptions = useChart({
    colors: [paletteColor.main],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    stroke: {
      width: 4,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: any) => fCurrency(value),
        title: {
          formatter: () => "",
        },
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.56,
        opacityTo: 0.56,
      },
    },
    ...options,
  });

  return (
    <Card
      sx={{
        width: 1,
        boxShadow: 0,
        color: paletteColor.dark,
        bgcolor: paletteColor.light,
        ...sx,
      }}
      {...other}
    >
      <Iconify
        icon={icon}
        sx={{
          p: 1.5,
          top: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: "50%",
          position: "absolute",
          color: paletteColor.light,
          bgcolor: paletteColor.dark,
        }}
      />

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="h3">{fCurrency(total)}</Typography>

        <TrendingInfo percent={percent} />
      </Stack>

      <Chart
        type="area"
        series={[{ data: series }]}
        options={chartOptions}
        height={120}
      />
    </Card>
  );
}

interface TrendingInfoProps {
  percent: number;
}

function TrendingInfo({ percent }: TrendingInfoProps) {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={0.5}>
      <Iconify
        icon={percent < 0 ? "eva:trending-down-fill" : "eva:trending-up-fill"}
      />

      <Typography variant="subtitle2" component="span">
        {percent > 0 && "+"}

        {fPercent(percent)}

        <Box component="span" sx={{ opacity: 0.72, typography: "body2" }}>
          {" than last month"}
        </Box>
      </Typography>
    </Stack>
  );
}
