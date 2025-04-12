import {
  Card,
  CardHeader,
  Typography,
  Stack,
  LinearProgress,
} from "@mui/material";
import { fPercent, fCurrency } from "../../../../utils/formatNumber";

interface EcommerceSalesOverviewProps {
  data: any;
  title: string;
  subheader?: string;
}

export default function EcommerceSalesOverview({
  title,
  subheader,
  data,
  ...other
}: EcommerceSalesOverviewProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={4} sx={{ p: 3 }}>
        {data.map((progress: any) => (
          <ProgressItem key={progress.label} progress={progress} />
        ))}
      </Stack>
    </Card>
  );
}

function ProgressItem({ progress }: any) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Typography>
        <Typography variant="subtitle2">
          {fCurrency(progress.amount)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          &nbsp;({fPercent(progress.value)})
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={
          (progress.label === "Total Income" && "info") ||
          (progress.label === "Total Expenses" && "warning") ||
          "primary"
        }
      />
    </Stack>
  );
}
