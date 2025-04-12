import PropTypes from "prop-types";
import { TableRow, TableCell } from "@mui/material";

interface TableEmptyRowsProps {
  height: number;
  emptyRows: number;
}

export default function TableEmptyRows({
  emptyRows,
  height,
}: TableEmptyRowsProps) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
