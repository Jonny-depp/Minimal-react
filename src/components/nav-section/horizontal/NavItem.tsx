import { forwardRef } from "react";
import { useLocales } from "../../../locales";
import { StyledIcon, StyledItem } from "./styles";
import { Box, Link, ListItemText, Tooltip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Iconify from "../../iconify";
import RoleBasedGuard from "../../../auth/RoleBasedGuard";

interface NavItemProps {
  item: any;
  depth: number;
  open: boolean;
  active: boolean;
  isExternalLink: boolean;
  onClick: () => void;
}
const NavItem = forwardRef<HTMLSpanElement, NavItemProps>(
  ({ item, depth, open, active, isExternalLink, onClick, ...other }, ref) => {
    const { translate } = useLocales();

    const { title, path, icon, info, children, disabled, caption, roles } =
      item;

    const subItem = depth !== 1;

    const renderContent = (
      <StyledItem
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
        {...other}
      >
        {icon && <StyledIcon>{icon}</StyledIcon>}

        <ListItemText
          primary={`${translate(title)}`}
          primaryTypographyProps={{
            noWrap: true,
            component: "span",
            variant: active ? "subtitle2" : "body2",
          }}
        />

        {info && (
          <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
            {info}
          </Box>
        )}

        {caption && (
          <Tooltip title={`${translate(caption)}`} arrow>
            <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
              <Iconify icon="eva:info-outline" width={16} />
            </Box>
          </Tooltip>
        )}

        {!!children && (
          <Iconify
            icon={subItem ? "eva:chevron-right-fill" : "eva:chevron-down-fill"}
            width={16}
            sx={{ ml: 0.5, flexShrink: 0 }}
          />
        )}
      </StyledItem>
    );

    const renderItem = () => {
      if (isExternalLink)
        return (
          <Link href={path} target="_blank" rel="noopener" underline="none">
            {renderContent}
          </Link>
        );

      return (
        <Link component={RouterLink} to={path} underline="none">
          {renderContent}
        </Link>
      );
    };

    return <RoleBasedGuard roles={roles}> {renderItem()} </RoleBasedGuard>;
  }
);

export default NavItem;
