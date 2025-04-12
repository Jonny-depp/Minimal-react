import { useState } from "react";
import {
  Box,
  Stack,
  Avatar,
  Divider,
  Checkbox,
  MenuItem,
  Typography,
  IconButton,
  AvatarGroup,
  SxProps,
} from "@mui/material";
import useResponsive from "../../../../hooks/useResponsive";
import useCopyToClipboard from "../../../../hooks/useCopyToClipboard";
import { fData } from "../../../../utils/formatNumber";
import { fDateTime } from "../../../../utils/formatTime";
import Iconify from "../../../../components/iconify";
import { useSnackbar } from "../../../../components/snackbar";
import MenuPopover from "../../../../components/menu-popover";
import FileThumbnail from "../../../../components/file-thumbnail";

interface FileGeneralRecentCardProps {
  sx: SxProps;
  file: any;
  onDelete: () => void;
}

export default function FileGeneralRecentCard({
  file,
  onDelete,
  sx,
  ...other
}: FileGeneralRecentCardProps) {
  const { enqueueSnackbar } = useSnackbar();

  const { copy } = useCopyToClipboard();

  const isDesktop = useResponsive("up", "sm");

  const [inviteEmail, setInviteEmail] = useState("");

  const [openPopover, setOpenPopover] = useState(null);

  const [favorited, setFavorited] = useState(file.isFavorited);

  const [openShare, setOpenShare] = useState(false);

  const [openDetails, setOpenDetails] = useState(false);

  const handleFavorite = () => {
    setFavorited(!favorited);
  };

  const handleOpenShare = () => {
    setOpenShare(true);
  };

  const handleCloseShare = () => {
    setOpenShare(false);
  };

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleOpenPopover = (event: any) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleChangeInvite = (event: any) => {
    setInviteEmail(event.target.value);
  };

  const handleCopy = () => {
    enqueueSnackbar("Copied!");
    copy(file.url);
  };

  return (
    <>
      <Stack
        spacing={isDesktop ? 1.5 : 2}
        direction={isDesktop ? "row" : "column"}
        alignItems={isDesktop ? "center" : "flex-start"}
        sx={{
          p: 2.5,
          borderRadius: 2,
          position: "relative",
          border: (theme) => `solid 1px ${theme.palette.divider}`,
          "&:hover": {
            bgcolor: "background.paper",
            boxShadow: (theme) => theme.shadows[20],
          },
          ...(isDesktop && {
            p: 1.5,
            borderRadius: 1.5,
          }),
          ...sx,
        }}
        {...other}
      >
        <FileThumbnail file={file.type} />

        <Stack
          onClick={handleOpenDetails}
          sx={{
            width: 1,
            flexGrow: { sm: 1 },
            minWidth: { sm: "1px" },
          }}
        >
          <Typography variant="subtitle2" noWrap>
            {file.name}
          </Typography>

          <Stack
            spacing={0.75}
            direction="row"
            alignItems="center"
            sx={{ typography: "caption", color: "text.disabled", mt: 0.5 }}
          >
            <Box> {fData(file.size)} </Box>

            <Box
              sx={{
                width: 2,
                height: 2,
                borderRadius: "50%",
                bgcolor: "currentColor",
              }}
            />

            <Box> {fDateTime(file.dateModified)} </Box>
          </Stack>
        </Stack>

        {isDesktop && (
          <AvatarGroup
            max={4}
            sx={{
              mx: 1.5,
              "& .MuiAvatarGroup-avatar": {
                width: 24,
                height: 24,
                "&:first-of-type": {
                  fontSize: 12,
                },
              },
            }}
          >
            {file?.shared?.map((person: any) => (
              <Avatar key={person.id} alt={person.name} src={person.avatar} />
            ))}
          </AvatarGroup>
        )}

        <Box
          sx={{
            top: 8,
            right: 8,
            flexShrink: 0,
            position: "absolute",
            ...(isDesktop && {
              position: "unset",
            }),
          }}
        >
          <Checkbox
            color="warning"
            icon={<Iconify icon="eva:star-outline" />}
            checkedIcon={<Iconify icon="eva:star-fill" />}
            checked={favorited}
            onChange={handleFavorite}
            sx={{ p: 0.75 }}
          />

          <IconButton
            color={openPopover ? "inherit" : "default"}
            onClick={handleOpenPopover}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </Box>
      </Stack>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            handleClosePopover();
            handleCopy();
          }}
        >
          <Iconify icon="eva:link-2-fill" />
          Copy Link
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClosePopover();
            handleOpenShare();
          }}
        >
          <Iconify icon="eva:share-fill" />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={() => {
            handleClosePopover();
            onDelete();
          }}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="eva:trash-2-outline" />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
