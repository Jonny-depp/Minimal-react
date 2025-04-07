import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import NavList from "./NavList";
interface NavDesktopProps {
  data: any[];
  isOffset: boolean;
}

export default function NavDesktop({ isOffset, data }: NavDesktopProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{ mr: 5, height: 1 }}
    >
      {data.map((link: any) => (
        <NavList key={link.title} item={link} isOffset={isOffset} />
      ))}
    </Stack>
  );
}
