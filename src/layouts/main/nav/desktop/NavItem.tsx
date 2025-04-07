import { forwardRef, type ForwardRefRenderFunction } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, CardActionArea } from "@mui/material";
import Iconify from "../../../../components/iconify";
import Image from "../../../../components/image";
import type { NavItemProps, NavItemDashboardProps } from "./nav";
import { ListItem } from "./styles";
import { m } from "framer-motion";

const NavItemComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  NavItemProps
> = (
  { item, open, isOffset, active, subItem, isExternalLink, onClick, ...other },
  ref
) => {
  const { title, path, children } = item;

  const renderContent = (
    <ListItem
      ref={ref}
      disableRipple
      isOffset={isOffset}
      subItem={subItem}
      active={active}
      open={open}
      onClick={onClick}
      {...other}
    >
      {title}

      {!!children && (
        <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />
      )}
    </ListItem>
  );

  if (isExternalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    );
  }

  if (children) {
    return renderContent;
  }

  return (
    <Link component={RouterLink} to={path} underline="none">
      {renderContent}
    </Link>
  );
};

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  NavItemComponent
);

export function NavItemDashboard({
  item,
  sx,
  onClick,
  ...other
}: NavItemDashboardProps) {
  return (
    <Link
      component={RouterLink}
      to={item.path}
      sx={{ width: 1 }}
      onClick={onClick}
      {...other}
    >
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1,
          color: "text.disabled",
          bgcolor: "background.neutral",
          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Image
            visibleByDefault
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}
