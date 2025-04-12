import { Stack } from "@mui/material";
import NavList from "./NavList";
import { hideScrollbarY } from "../../../utils/cssStyles";

interface NavSectionHorizontalProps {
  sx?: Object;
  data: Array<any>;
}
const NavSectionHorizontal = ({
  data,
  sx = {},
  ...other
}: NavSectionHorizontalProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mx: "auto",
        hideScrollbarY,
        ...sx,
      }}
      {...other}
    >
      {data.map((group) => (
        <Items key={group.subheader} items={group.items} />
      ))}
    </Stack>
  );
};
export default NavSectionHorizontal;

const Items = ({ items }: any) => {
  return (
    <>
      {items.map((list: any) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={1}
          hasChild={!!list.children}
        />
      ))}
    </>
  );
};
