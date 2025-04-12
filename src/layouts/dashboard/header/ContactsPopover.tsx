import { useState } from "react";
import { IconButtonAnimate } from "../../../components/animate";
import Iconify from "../../../components/iconify";
import MenuPopover from "../../../components/menu-popover";
import {
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { _contacts } from "../../../_mock/arrays";
import Scrollbar from "../../../components/scrollbar";
import BadgeStatus from "../../../components/BadgeStatus";
import { fToNow } from "../../../utils/formatTime";
import { CustomAvatar } from "../../../components/custom-avatar";
import { alpha } from "@mui/material/styles";
const ITEM_HEIGHT = 64;

const ContactsPopover = () => {
  const [openPopover, setOpenPopover] = useState(null);
  const handleOpenPopover = (event: any) => {
    setOpenPopover(event.currentTarget);
  };
  const handleClosePopover = () => {
    setOpenPopover(null);
  };
  return (
    <>
      <IconButtonAnimate
        color={openPopover ? "primary" : "default"}
        onClick={handleOpenPopover}
        sx={{
          width: 40,
          height: 40,
          ...(openPopover
            ? {
                bgcolor: (theme) =>
                  alpha(
                    theme.palette.primary.main,
                    theme.palette.action.focusOpacity
                  ),
              }
            : {}),
        }}
      >
        <Iconify icon="eva:people-fill" />
      </IconButtonAnimate>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 320 }}
      >
        <Typography variant="h6" sx={{ p: 1.5 }}>
          Contracts<Typography component="span">{_contacts.length}</Typography>
        </Typography>

        <Scrollbar sx={{ height: ITEM_HEIGHT * 6 }}>
          {_contacts.map((contact) => (
            <MenuItem key={contact.id} sx={{ height: ITEM_HEIGHT }}>
              <ListItemAvatar>
                <CustomAvatar
                  name={contact.avatar}
                  BadgeProps={{
                    badgeContent: <BadgeStatus status={contact.status} />,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={
                  contact.status === "offline"
                    ? fToNow(contact.lastActivity)
                    : ""
                }
                primaryTypographyProps={{
                  typography: "subtitle2",
                  sx: { mb: 0.25 },
                }}
                secondaryTypographyProps={{ typography: "caption" }}
              />
            </MenuItem>
          ))}
        </Scrollbar>
      </MenuPopover>
    </>
  );
};
export default ContactsPopover;
