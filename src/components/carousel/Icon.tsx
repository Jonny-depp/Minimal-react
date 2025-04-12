import PropTypes from "prop-types";
import Iconify from "../iconify";

interface LeftIconProps {
  isRTL: boolean;
  icon: any;
}

export function LeftIcon({
  icon = "eva:arrow-ios-forward-fill",
  isRTL,
}: LeftIconProps) {
  return (
    <Iconify
      icon={icon}
      sx={{
        width: 20,
        height: 20,
        transform: " scaleX(-1)",
        ...(isRTL && {
          transform: " scaleX(1)",
        }),
      }}
    />
  );
}

interface RightIconProps {
  isRTL: boolean;
  icon: any;
}

export function RightIcon({
  icon = "eva:arrow-ios-forward-fill",
  isRTL,
}: RightIconProps) {
  return (
    <Iconify
      icon={icon}
      sx={{
        width: 20,
        height: 20,
        ...(isRTL && {
          transform: " scaleX(-1)",
        }),
      }}
    />
  );
}
