import { SxProps } from "@mui/system";
import { useLocales } from "../../../locales";
import { List, Stack } from "@mui/material";
import { StyledSubheader } from "./styles";
import NavList from "../mini/NavList";

interface NavSectionVerticalProps {
  sx?: SxProps;
  data?: any;
}

const NavSectionVertical = ({
  data,
  sx,
  ...other
}: NavSectionVerticalProps) => {
  const { translate } = useLocales();
  return (
    <Stack sx={sx} {...other}>
      {data.map((group: any) => {
        const key = group.subheader || group.items[0].title;

        return (
          <List key={key} disablePadding sx={{ px: 2 }}>
            {group.subheader && (
              <StyledSubheader disableSticky>{`${translate(
                group.subheader
              )}`}</StyledSubheader>
            )}

            {group.items.map((list: any) => (
              <NavList
                key={list.title + list.path}
                data={list}
                depth={1}
                hasChild={!!list.children}
              />
            ))}
          </List>
        );
      })}
    </Stack>
  );
};
export default NavSectionVertical;
