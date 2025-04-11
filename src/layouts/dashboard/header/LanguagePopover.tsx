import { MenuItem, Stack, Theme, SxProps } from "@mui/material";
import { bgcolor } from "@mui/system";
import { IconButtonAnimate } from "../../../components/animate";
import Image from "../../../components/image";
import MenuPopover from "../../../components/menu-popover";
import { useState } from "react";
import { useLocales } from "../../../locales";

const LanguagePopover = () => {
  const [openPopover, setOpenPopover] = useState(null);
  const { allLangs, currentLang, onChangeLang } = useLocales();

  const handleOpenPopover = (event: any) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleChangeLang = (newLang: string) => {
    onChangeLang(newLang);
    handleClosePopover();
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          width: 40,
          height: 40,
          ...((openPopover
            ? {
                bgcolor: "action.seleted",
              }
            : "") as SxProps<Theme>),
        }}
      >
        <Image disabledEffect src={currentLang.icon} alt={currentLang.label} />
      </IconButtonAnimate>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 180 }}
      >
        <Stack spacing={0.75}>
          {allLangs.map((option: any) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={(e) => handleChangeLang(option.value)}
            >
              <Image
                disabledEffect
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
};

export default LanguagePopover;
