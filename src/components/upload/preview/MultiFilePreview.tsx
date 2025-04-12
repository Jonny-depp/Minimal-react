import { m, AnimatePresence } from "framer-motion";
import { alpha, SxProps } from "@mui/material/styles";
import { IconButton, Stack, Typography } from "@mui/material";
import { fData } from "../../../utils/formatNumber";
import Iconify from "../../iconify";
import { varFade } from "../../animate";
import FileThumbnail, { fileData } from "../../file-thumbnail";

interface MultiFilePreviewProps {
  sx?: SxProps;
  files: any;
  onRemove?: () => void;
  thumbnail?: boolean;
}

export default function MultiFilePreview({
  thumbnail,
  files,
  onRemove,
  sx,
}: MultiFilePreviewProps) {
  if (!files?.length) {
    return null;
  }

  return (
    <AnimatePresence initial={false}>
      {files.map((file: any) => {
        const { key, name = "", size = 0 } = fileData(file);

        const isNotFormatFile = typeof file === "string";

        if (thumbnail) {
          return (
            <Stack
              key={key}
              component={m.div}
              {...varFade().inUp}
              alignItems="center"
              display="inline-flex"
              justifyContent="center"
              sx={{
                m: 0.5,
                width: 80,
                height: 80,
                borderRadius: 1.25,
                overflow: "hidden",
                position: "relative",
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                ...sx,
              }}
            >
              <FileThumbnail
                tooltip
                imageView
                file={file}
                sx={{ position: "absolute" }}
                imgSx={{ position: "absolute" }}
              />

              {onRemove && (
                <IconButton
                  size="small"
                  onClick={() => onRemove()}
                  sx={{
                    top: 4,
                    right: 4,
                    p: "1px",
                    position: "absolute",
                    color: (theme) => alpha(theme.palette.common.white, 0.72),
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                    "&:hover": {
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                    },
                  }}
                >
                  <Iconify icon="eva:close-fill" width={16} />
                </IconButton>
              )}
            </Stack>
          );
        }

        return (
          <Stack
            key={key}
            component={m.div}
            {...varFade().inUp}
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{
              my: 1,
              px: 1,
              py: 0.75,
              borderRadius: 0.75,
              border: (theme) => `solid 1px ${theme.palette.divider}`,
              ...sx,
            }}
          >
            <FileThumbnail file={file} />

            <Stack flexGrow={1} sx={{ minWidth: 0 }}>
              <Typography variant="subtitle2" noWrap>
                {isNotFormatFile ? file : name}
              </Typography>

              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {isNotFormatFile ? "" : fData(size)}
              </Typography>
            </Stack>

            {onRemove && (
              <IconButton edge="end" size="small" onClick={() => onRemove()}>
                <Iconify icon="eva:close-fill" />
              </IconButton>
            )}
          </Stack>
        );
      })}
    </AnimatePresence>
  );
}
