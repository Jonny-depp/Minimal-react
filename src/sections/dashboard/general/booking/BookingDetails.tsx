import { useState } from "react";
import { format } from "date-fns";
import { sentenceCase } from "change-case";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Table,
  Avatar,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  Typography,
  IconButton,
  TableContainer,
} from "@mui/material";
import Label from "../../../../components/label";
import Iconify from "../../../../components/iconify";
import Scrollbar from "../../../../components/scrollbar";
import MenuPopover from "../../../../components/menu-popover";
import { TableHeadCustom } from "../../../../components/table";

interface BookingDetailsProps {
  title: string;
  tableData: any;
  subheader?: string;
  tableLabels: any;
}

export default function BookingDetails({
  title,
  subheader,
  tableLabels,
  tableData,
  ...other
}: BookingDetailsProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: "unset" }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row: any) => (
                <BookingDetailsRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}

function BookingDetailsRow({ row }: any) {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event: any) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleDownload = () => {
    handleClosePopover();
    console.log("DOWNLOAD", row.id);
  };

  const handlePrint = () => {
    handleClosePopover();
    console.log("PRINT", row.id);
  };

  const handleShare = () => {
    handleClosePopover();
    console.log("SHARE", row.id);
  };

  const handleDelete = () => {
    handleClosePopover();
    console.log("DELETE", row.id);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={row.name} src={row.avatar} />
            <Typography variant="subtitle2">{row.name}</Typography>
          </Stack>
        </TableCell>

        <TableCell>{format(new Date(row.checkIn), "dd MMM yyyy")}</TableCell>

        <TableCell>{format(new Date(row.checkOut), "dd MMM yyyy")}</TableCell>

        <TableCell>
          <Label
            variant={isLight ? "soft" : "filled"}
            color={
              (row.status === "paid" && "success") ||
              (row.status === "pending" && "warning") ||
              "error"
            }
          >
            {sentenceCase(row.status)}
          </Label>
        </TableCell>

        <TableCell>{row.phoneNumber}</TableCell>

        <TableCell sx={{ textTransform: "capitalize" }}>
          {row.roomType}
        </TableCell>

        <TableCell align="right">
          <IconButton
            color={openPopover ? "inherit" : "default"}
            onClick={handleOpenPopover}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem onClick={handleDownload}>
          <Iconify icon="eva:download-fill" />
          Download
        </MenuItem>

        <MenuItem onClick={handlePrint}>
          <Iconify icon="eva:printer-fill" />
          Print
        </MenuItem>

        <MenuItem onClick={handleShare}>
          <Iconify icon="eva:share-fill" />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          <Iconify icon="eva:trash-2-outline" />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
