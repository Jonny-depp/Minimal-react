import PropTypes from "prop-types";
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from "@mui/lab";
import { fDateTime } from "../../../../utils/formatTime";

interface AnalyticsOrderTimelineProps {
  list: any;
  title: string;
  subheader?: string;
}

export default function AnalyticsOrderTimeline({
  title,
  subheader,
  list,
  ...other
}: AnalyticsOrderTimelineProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          "& .MuiTimelineItem-missingOppositeContent:before": {
            display: "none",
          },
        }}
      >
        {/* <Timeline> */}
        {list.map((item: any, index: number) => (
          <OrderItem
            key={item.id}
            item={item}
            isLast={index === list.length - 1}
          />
        ))}
        {/* </Timeline> */}
      </CardContent>
    </Card>
  );
}

interface OrderItemProps {
  isLast: boolean;
  item: any;
}

function OrderItem({ item, isLast }: OrderItemProps) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === "order1" && "primary") ||
            (type === "order2" && "success") ||
            (type === "order3" && "info") ||
            (type === "order4" && "warning") ||
            "error"
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
