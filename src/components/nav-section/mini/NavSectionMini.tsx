import { Stack } from "@mui/system";
import { memo } from "react";
import NavList from "./NavList";
import { Box } from "@mui/material";

interface NavSectionMiniProps {
  data?: any;
  sx?: object;
}
const NavSectionMini = ({ data, sx, ...other }: NavSectionMiniProps) => {
  return (
    <Stack
      spacing={0.5}
      alignItems="center"
      sx={{
        px: 0.75,
        ...sx,
      }}
      {...other}
    >
      {data.map((group: any, index: number) => (
        <Items
          key={group.subheader}
          items={group.items}
          isLastGroup={index + 1 === data.length}
        />
      ))}
    </Stack>
  );
};

export default memo(NavSectionMini);

interface ItemsPros {
  items: any;
  isLastGroup: boolean;
}
const Items = ({ items, isLastGroup }: ItemsPros) => {
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

      {!isLastGroup && (
        <Box
          sx={{
            width: 24,
            height: "1px",
            bgcolor: "divider",
            my: "8px !important",
          }}
        />
      )}
    </>
  );
};
