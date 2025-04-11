import { Box, Switch, TablePagination, FormControlLabel } from "@mui/material";

interface TablePaginationCustomProps {
  dense: boolean;
  onChangeDense: () => void;
  rowsPerPageOptions: any;
  sx: object;
}

export default function TablePaginationCustom({
  dense,
  onChangeDense,
  rowsPerPageOptions = [5, 10, 25],
  sx,
  ...other
}: TablePaginationCustomProps) {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      {onChangeDense && (
        <FormControlLabel
          label="Dense"
          control={<Switch checked={dense} onChange={onChangeDense} />}
          sx={{
            pl: 2,
            py: 1.5,
            top: 0,
            position: {
              md: "absolute",
            },
          }}
        />
      )}
    </Box>
  );
}
