import { Typography, Stack, Button, SxProps } from "@mui/material";
import { UpgradeStorageIllustration } from "../../../../assets/illustrations";

interface FileGeneralUpgradeProps {
  sx: SxProps;
}

export default function FileGeneralUpgrade({
  sx,
  ...other
}: FileGeneralUpgradeProps) {
  return (
    <Stack
      alignItems="center"
      sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral", ...sx }}
      {...other}
    >
      <UpgradeStorageIllustration />

      <Button
        size="large"
        color="warning"
        variant="contained"
        sx={{ mt: 5, mb: 2 }}
      >
        Upgrade Plan
      </Button>

      <Typography
        variant="caption"
        sx={{ color: "text.disabled", textAlign: "center" }}
      >
        Upgrade your plan and get more space
      </Typography>
    </Stack>
  );
}
