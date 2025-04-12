import { forwardRef } from "react";
import { useLocales } from "../../../locales";
import { StyledIcon, StyledItem } from "./styles";
import { Link, ListItemText, Tooltip } from "@mui/material";
import Iconify from "../../iconify";
import { Link as RouterLink } from "react-router-dom";
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
    const { title, path, icon, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = (
      <StyledItem open={open}>
        {icon && <StyledIcon>{icon}</StyledIcon>}

        <ListItemText
          primary={`${translate(title)}`}
          primaryTypographyProps={{
            noWrap: true,
            sx: {
              width: 72,
              fontSize: 10,
              lineHeight: "16px",
              textAlign: "center",
              ...(active && {
                fontWeight: "fontWeightMedium",
              }),
              ...(subItem && {
                fontSize: 14,
                width: "auto",
                textAlign: "left",
              }),
            },
          }}
        />

        {caption && (
          <Tooltip title={`${translate(caption)}`} arrow placement="right">
            <Iconify
              icon="eva:info-outline"
              width={16}
              sx={{
                top: 11,
                left: 6,
                position: "absolute",
              }}
            />
          </Tooltip>
        )}

        {!!children && (
          <Iconify
            width={16}
            icon="eva:chevron-right-fill"
            sx={{
              top: 11,
              right: 6,
              position: "absolute",
            }}
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
