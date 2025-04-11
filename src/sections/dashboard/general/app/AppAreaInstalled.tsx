import { useState } from "react";
import Chart, { useChart } from "../../../../components/chart";
import { Box, Card, CardHeader } from "@mui/material";
import CustomSmallSelect from "../../../../components/custom-input/CustomSmallSelect";

interface AppAreaInstalledProps {
  title: string;
  chart: any;
  subheader?: string;
}

const AppAreaInstalled = ({
  title,
  chart,
  subheader,
  ...other
}: AppAreaInstalledProps) => {
  const { colors, categories, series, options } = chart;
  const [seriesData, setSeriesData] = useState("2019");
  const chartOptions = useChart({
    colors,
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
              type="line"
              series={item.data}
              options={chartOptions}
              height={364}
            />
          )}
        </Box>
      ))}
    </Card>
  );
};
export default AppAreaInstalled;
