import PropTypes from "prop-types";
// @mui
import { useTheme, styled, alpha, SxProps } from "@mui/material/styles";
import { Stack, IconButton } from "@mui/material";
//
import { LeftIcon, RightIcon } from "./Icon";

// ----------------------------------------------------------------------

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) =>
    prop !== "filled" && prop !== "hasChildren" && prop !== "shape",
})<any>(({ filled, shape, hasChildren, theme }) => ({
  color: "inherit",
  transition: theme.transitions.create("all", {
    duration: theme.transitions.duration.shorter,
  }),
  ...(shape === "rounded" && {
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
  }),
  ...(!filled && {
    opacity: 0.48,
    "&:hover": {
      opacity: 1,
    },
  }),
  ...(filled && {
    color: alpha(theme.palette.common.white, 0.8),
    backgroundColor: alpha(theme.palette.grey[900], 0.48),
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900],
    },
  }),
  ...(hasChildren && {
    zIndex: 9,
    top: "50%",
    position: "absolute",
    marginTop: theme.spacing(-2.5),
  }),
}));

interface CarouselArrowsProps {
  sx?: SxProps;
  onNext?: () => void;
  children?: import("react").ReactNode;
  onPrevious?: () => void;
  leftButtonProps?: any;
  rightButtonProps?: any;
  shape?: "circular" | "rounded";
  icon?: any;
  filled?: boolean;
}

export default function CarouselArrows({
  shape = "circular",
  filled = false,
  icon,
  onNext,
  onPrevious,
  children,
  leftButtonProps,
  rightButtonProps,
  sx,
  ...other
}: CarouselArrowsProps) {
  const theme = useTheme();

  const isRTL = theme.direction === "rtl";

  const hasChildren = !!children;

  if (hasChildren) {
    return (
      <Stack sx={sx} {...other}>
        <StyledIconButton
          filled={filled}
          shape={shape}
          hasChildren={!!children}
          onClick={onPrevious}
          {...leftButtonProps}
          sx={{
            left: 16,
            ...leftButtonProps?.sx,
          }}
        >
          <LeftIcon icon={icon} isRTL={isRTL} />
        </StyledIconButton>

        {children}

        <StyledIconButton
          filled={filled}
          shape={shape}
          hasChildren={!!children}
          onClick={onNext}
          {...rightButtonProps}
          sx={{
            right: 16,
            ...rightButtonProps?.sx,
          }}
        >
          <RightIcon icon={icon} isRTL={isRTL} />
        </StyledIconButton>
      </Stack>
    );
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      display="inline-flex"
      sx={sx}
      {...other}
    >
      <StyledIconButton
        filled={filled}
        shape={shape}
        onClick={onPrevious}
        {...leftButtonProps}
      >
        <LeftIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>

      <StyledIconButton
        filled={filled}
        shape={shape}
        onClick={onNext}
        {...rightButtonProps}
      >
        <RightIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>
    </Stack>
  );
}
