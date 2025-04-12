import { Box, Tooltip } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { bgBlur } from "../../../utils/cssStyles";
import SvgColor from "../../svg-color";
import IconButtonAnimate from "../../animate/IconButtonAnimate";
import BadgeDot from "./BadgeDot";

interface ToggleButtonProps {
  notDefault: boolean;
  open: boolean;
  onToggle: () => void;
}

const ToggleButton = ({ notDefault, open, onToggle }: ToggleButtonProps) => {
  const theme = useTheme();
  const blurStyles = bgBlur({ color: theme.palette.background.default });
  return (
    <Box
      sx={(theme) => ({
        p: 0.5,
        right: 24,
        bottom: 24,
        zIndex: 999,
        position: "fixed",
        borderRadius: "50%",
        boxShadow: `-12px 12px 32px -4px ${alpha(
          theme.palette.mode === "light"
            ? theme.palette.grey[600]
            : theme.palette.common.black,
          0.36
        )}`,
        style: { blurStyles },
      })}
    >
      {notDefault && !open && (
        <BadgeDot
          sx={{
            top: 8,
            right: 10,
          }}
        />
      )}

      <Tooltip title="Settings">
        <IconButtonAnimate color="primary" onClick={onToggle} sx={{ p: 1.25 }}>
          <SvgColor src="/assets/icons/setting/ic_setting.svg" />
        </IconButtonAnimate>
      </Tooltip>
    </Box>
  );
};

export default ToggleButton;
