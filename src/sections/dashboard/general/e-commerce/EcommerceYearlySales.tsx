import { useState } from "react";
import { Card, CardHeader, Box } from "@mui/material";
import { CustomSmallSelect } from "../../../../components/custom-input";
import Chart, { useChart } from "../../../../components/chart";

interface EcommerceYearlySalesProps {
  chart: any;
  title: string;
  subheader: string;
}

export default function EcommerceYearlySales({
  title,
  subheader,
  chart,
  ...other
}: EcommerceYearlySalesProps) {
  const { colors, categories, series, options } = chart;

  const [seriesData, setSeriesData] = useState("2019");

  const chartOptions = useChart({
    colors,
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    xaxis: {
      categories,
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
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </CustomSmallSelect>
        }
      />

      {series.map((item: any) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <Chart
              type="area"
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
