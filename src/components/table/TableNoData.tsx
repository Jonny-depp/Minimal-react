import { TableRow, TableCell } from "@mui/material";
import EmptyContent from "../empty-content";

interface TableNoDataProps {
  isNotFound: boolean;
}

export default function TableNoData({ isNotFound }: TableNoDataProps) {
  return (
    <TableRow>
      {isNotFound ? (
        <TableCell colSpan={12}>
          <EmptyContent
            title="No Data"
            sx={{
              "& span.MuiBox-root": { height: 160 },
            }}
          />
        </TableCell>
      ) : (
        <TableCell colSpan={12} sx={{ p: 0 }} />
      )}
    </TableRow>
  );
}
