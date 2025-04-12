import { Paper, SxProps, Typography } from "@mui/material";

interface SearchNotFoundProps {
  query: string;
  sx: SxProps;
}

export default function SearchNotFound({
  query,
  sx,
  ...other
}: SearchNotFoundProps) {
  return query ? (
    <Paper
      sx={{
        textAlign: "center",
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" paragraph>
        Not found
      </Typography>

      <Typography variant="body2">
        No results found for &nbsp;
        <strong>&quot;{query}&quot;</strong>.
        <br /> Try checking for typos or using complete words.
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      Please enter keywords
    </Typography>
  );
}
