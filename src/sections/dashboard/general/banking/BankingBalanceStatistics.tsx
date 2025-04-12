import { useState } from "react";
import { Card, CardHeader, Box } from "@mui/material";
import { CustomSmallSelect } from "../../../../components/custom-input";
import Chart, { useChart } from "../../../../components/chart";

interface BankingBalanceStatisticsProps {
  chart: any;
  title: string;
  subheader: string;
}

export default function BankingBalanceStatistics({
  title,
  subheader,
  chart,
  ...other
}: BankingBalanceStatisticsProps) {
  const { categories, colors, series, options } = chart;

  const [seriesData, setSeriesData] = useState("Year");

  const chartOptions = useChart({
    colors,
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories,
    },
    tooltip: {
      y: {
        formatter: (value: any) => `$${value}`,
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <CustomSmallSelect
            value={seriesData}
            onChange={(event: any) => setSeriesData(event.target.value)}
          >
            {series.map((option: any) => (
              <option key={option.type} value={option.type}>
                {option.type}
              </option>
            ))}
          </CustomSmallSelect>
        }
      />

      {series.map((item: any) => (
        <Box key={item.type} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.type === seriesData && (
            <Chart
              type="bar"
              series={item.data}
              options={chartOptions}
              height={364}
            />
          )}
        </Box>
      ))}
    </Card>
  );
}
