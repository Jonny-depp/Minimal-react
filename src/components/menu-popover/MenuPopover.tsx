import { ReactNode } from "react";
import {
  Popover,
  PopoverOrigin,
  PopoverProps,
  SxProps,
  Theme,
} from "@mui/material";
import { StyledArrow } from "./styles";

export type ArrowPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left-top"
  | "left-center"
  | "left-bottom"
  | "right-top"
  | "right-center"
  | "right-bottom";

export interface MenuPopoverProps
  extends Omit<PopoverProps, "open" | "anchorEl"> {
  open: HTMLElement | null;
  children: ReactNode;
  arrow?: ArrowPosition;
  disabledArrow?: boolean;
  sx?: SxProps<Theme>;
}

export default function MenuPopover({
  open,
  children,
  arrow = "top-right",
  disabledArrow = false,
  sx,
  ...other
}: MenuPopoverProps) {
  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          p: 1,
          width: "auto",
          overflow: "inherit",
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
            "& svg": {
              mr: 2,
              width: 20,
              height: 20,
              flexShrink: 0,
            },
          },
          ...sx,
        },
      }}
      {...other}
    >
      {!disabledArrow && <StyledArrow arrow={arrow} />}
      {children}
    </Popover>
  );
}
