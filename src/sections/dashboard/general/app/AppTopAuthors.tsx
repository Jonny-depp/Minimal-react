import orderBy from "lodash/orderBy";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Stack,
  Card,
  Avatar,
  CardHeader,
  Typography,
} from "@mui/material";
import { fShortenNumber } from "../../../../utils/formatNumber";
import Iconify from "../../../../components/iconify";

interface AppTopAuthorsProps {
  list: Array<any>;
  title: string;
  subheader?: string;
}

export default function AppTopAuthors({
  title,
  subheader,
  list,
  ...other
}: AppTopAuthorsProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {orderBy(list, ["favourite"], ["desc"]).map((author, index) => (
          <AuthorItem key={author.id} author={author} index={index} />
        ))}
      </Stack>
    </Card>
  );
}

function AuthorItem({ author, index }: any) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar alt={author.name} src={author.avatar} />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{author.name}</Typography>

        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          <Iconify icon="eva:heart-fill" width={16} sx={{ mr: 0.5 }} />
          {fShortenNumber(author.favourite)}
        </Typography>
      </Box>

      <Iconify
        icon="ant-design:trophy-filled"
        sx={{
          p: 1,
          width: 40,
          height: 40,
          borderRadius: "50%",
          color: "primary.main",
          bgcolor: (theme: any) => alpha(theme.palette.primary.main, 0.08),
          ...(index === 1 && {
            color: "info.main",
            bgcolor: (theme: any) => alpha(theme.palette.info.main, 0.08),
          }),
          ...(index === 2 && {
            color: "error.main",
            bgcolor: (theme: any) => alpha(theme.palette.error.main, 0.08),
          }),
        }}
      />
    </Stack>
  );
}
