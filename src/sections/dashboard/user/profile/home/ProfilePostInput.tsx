import { useRef } from "react";
import { alpha } from "@mui/material/styles";
import { Card, Button, Fab, Stack, InputBase } from "@mui/material";
import Iconify from "../../../../../components/iconify";

const ProfilePostInput = () => {
  const fileInputRef = useRef(null);

  const handleClickAttach = () => {
    fileInputRef.current;
  };

  return (
    <Card sx={{ p: 3 }}>
      <InputBase
        multiline
        fullWidth
        rows={4}
        placeholder="Share what you are thinking here..."
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 1,
          border: (theme) =>
            `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
        }}
      />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ color: "text.secondary" }}
        >
          <Fab size="small" color="inherit" onClick={handleClickAttach}>
            <Iconify
              icon="ic:round-perm-media"
              width={24}
              sx={{ color: "success.main" }}
            />
            Image/Video
          </Fab>

          <Fab size="small" color="inherit">
            <Iconify
              icon="eva:video-fill"
              width={24}
              sx={{ color: "error.main" }}
            />
            Streaming
          </Fab>
        </Stack>

        <Button variant="contained">Post</Button>
      </Stack>

      <input ref={fileInputRef} type="file" style={{ display: "none" }} />
    </Card>
  );
};

export default ProfilePostInput;
