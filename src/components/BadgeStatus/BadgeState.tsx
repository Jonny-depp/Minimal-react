import { SxProps, useTheme } from "@mui/material/styles";
import { StyledBadgeStatus } from "./styles";

interface BadgeStatusProps {
  sx?: SxProps;
  size?: "small" | "medium" | "large";
  status?: "away" | "busy" | "unread" | "online" | "offline" | "invisible";
}

const BadgeStatus: React.FC<BadgeStatusProps> = ({
  size = "medium",
  status = "offline",
  sx,
}) => {
  const theme = useTheme();

  return (
    <StyledBadgeStatus ownerState={{ status, size }} sx={sx} theme={theme} />
  );
};
export default BadgeStatus;
