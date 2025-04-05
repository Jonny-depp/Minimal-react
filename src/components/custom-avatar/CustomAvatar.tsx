import { forwardRef, ReactNode } from "react";
import { Avatar, Badge, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type AvatarColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

interface CustomAvatarProps {
  name?: string;
  color?: AvatarColor;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  BadgeProps?: Partial<React.ComponentProps<typeof Badge>>;
}

const getCharAtName = (name?: string) => name?.charAt(0).toUpperCase() || "";
const getColorByName = (name?: string): AvatarColor => {
  const char = getCharAtName(name);
  if (["A", "N", "H", "L", "Q"].includes(char)) return "primary";
  if (["F", "G", "T", "I", "J"].includes(char)) return "info";
  if (["K", "D", "Y", "B", "O"].includes(char)) return "success";
  if (["P", "E", "R", "S", "U"].includes(char)) return "warning";
  if (["V", "W", "X", "M", "Z"].includes(char)) return "error";
  return "default";
};

const CustomAvatar = forwardRef<HTMLDivElement, CustomAvatarProps>(
  ({ color, name = "", BadgeProps, children, sx, ...other }, ref) => {
    const theme = useTheme();
    const charAtName = getCharAtName(name);
    const colorByName = getColorByName(name);
    const finalColor = color || colorByName;

    const avatarStyle =
      finalColor === "default"
        ? sx
        : {
            color: theme.palette[finalColor]?.contrastText,
            backgroundColor: theme.palette[finalColor]?.main,
            fontWeight: theme.typography.fontWeightMedium,
            ...sx,
          };

    const avatar = (
      <Avatar ref={ref} sx={avatarStyle} {...other}>
        {charAtName}
        {children}
      </Avatar>
    );

    return BadgeProps ? (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        {...BadgeProps}
      >
        {avatar}
      </Badge>
    ) : (
      avatar
    );
  }
);

export default CustomAvatar;
