import { useState } from "react";
import { Card, CardHeader, Box } from "@mui/material";
import { fData } from "../../../../utils/formatNumber";
import { CustomSmallSelect } from "../../../../components/custom-input";
import Chart, { useChart } from "../../../../components/chart";

interface FileGeneralDataActivityProps {
  chart: any;
  title: string;
  subheader?: string;
}

export default function FileGeneralDataActivity({
  title,
  subheader,
  chart,
  ...other
}: FileGeneralDataActivityProps) {
  const { labels, colors, series, options } = chart;

  const [seriesData, setSeriesData] = useState("Week");

  const chartOptions = useChart({
    chart: {
      stacked: true,
    },
    colors,
    stroke: {
      width: 0,
    },
    xaxis: {
      categories:
        (seriesData === "Week" && labels.week) ||
        (seriesData === "Month" && labels.month) ||
        labels.year,
    },
    tooltip: {
      y: {
        formatter: (value: any) => fData(value),
      },
    },
    plotOptions: {
      bar: {
        borderRadius:
          (seriesData === "Week" && 8) || (seriesData === "Month" && 6) || 10,
        columnWidth: "20%",
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
