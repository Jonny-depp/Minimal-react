import { Box, Card, CardHeader } from "@mui/material";
import { fNumber } from "../../../../utils/formatNumber";
import Chart, { useChart } from "../../../../components/chart";

interface AnalyticsConversionRatesProps {
  chart: any;
  title: string;
  subheader: string;
}

export default function AnalyticsConversionRates({
  title,
  subheader,
  chart,
  ...other
}: AnalyticsConversionRatesProps) {
  const { colors, series, options } = chart;

  const chartSeries = series.map((i: any) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: any) => fNumber(value),
        title: {
          formatter: () => "",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "28%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i: any) => i.label),
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
