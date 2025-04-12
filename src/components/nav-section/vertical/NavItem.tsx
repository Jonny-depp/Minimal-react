import { Box, Link, ListItemText, Tooltip } from "@mui/material";
import { useLocales } from "../../../locales";
import { StyledDotIcon, StyledIcon, StyledItem } from "./styles";
import Iconify from "../../iconify";
import { Link as RouterLink } from "react-router-dom";
import RoleBasedGuard from "../../../auth/RoleBasedGuard";
interface NavItemProps {
  open: boolean;
  active: boolean;
  item: any;
  depth: number;
  isExternalLink: boolean;
  onClick: () => void;
}

const NavItem = ({
  open,
  active,
  item,
  depth,
  isExternalLink,
  ...other
}: NavItemProps) => {
  const { translate } = useLocales();
  const { title, path, icon, info, children, disabled, caption, roles } = item;
  const subItem = depth != 1;
  const renderContent = (
    <StyledItem
      depth={depth}
      active={active}
      disabled={disabled}
      caption={caption}
      {...other}
    >
      {icon && <StyledIcon>{icon}</StyledIcon>}

      {subItem && (
        <StyledIcon>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      <ListItemText
        sx={{ color: "white" }}
        primary={`${translate(title)}`}
        secondary={
          caption && (
            <Tooltip title={`${translate(caption)}`} placement="top-start">
              <span>{`${translate(caption)}`}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          component: "span",
          variant: active ? "subtitle2" : "body2",
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: "caption",
        }}
      />
      {/* {info && (
        <Box component="span" sx={{ lineHeight: 0 }}>
          {info}
        </Box>
      )} */}

      {!!children && (
        <Iconify
          width={16}
          icon={
            open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"
          }
          sx={{ ml: 1, flexShrink: 0 }}
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

    if (children) {
      return renderContent;
    }

    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return <RoleBasedGuard roles={roles}> {renderItem()} </RoleBasedGuard>;
};
export default NavItem;
