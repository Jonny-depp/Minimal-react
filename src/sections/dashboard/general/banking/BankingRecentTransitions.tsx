import { useState } from "react";
import { format } from "date-fns";
import { sentenceCase } from "change-case";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
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
import { fCurrency } from "../../../../utils/formatNumber";
import Label from "../../../../components/label";
import Iconify from "../../../../components/iconify";
import Scrollbar from "../../../../components/scrollbar";
import MenuPopover from "../../../../components/menu-popover";
import { TableHeadCustom } from "../../../../components/table";
import { string } from "prop-types";

interface BankingRecentTransitionsProps {
  title: string;
  tableData: any;
  subheader?: string;
  tableLabels: any;
}

export default function BankingRecentTransitions({
  title,
  subheader,
  tableLabels,
  tableData,
  ...other
}: BankingRecentTransitionsProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: "unset" }}>
        <Scrollbar sx={{ minWidth: 720 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row: any) => (
                <BankingRecentTransitionsRow key={row.id} row={row} />
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

function BankingRecentTransitionsRow({ row }: any) {
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              {renderAvatar({ category: row.category, avatar: row.avatar })}
              <Box
                sx={{
                  right: 0,
                  bottom: 0,
                  width: 18,
                  height: 18,
                  display: "flex",
                  borderRadius: "50%",
                  position: "absolute",
                  alignItems: "center",
                  color: "common.white",
                  bgcolor: "error.main",
                  justifyContent: "center",
                  ...(row.type === "Income" && {
                    bgcolor: "success.main",
                  }),
                }}
              >
                <Iconify
                  icon={
                    row.type === "Income"
                      ? "eva:diagonal-arrow-left-down-fill"
                      : "eva:diagonal-arrow-right-up-fill"
                  }
                  width={16}
                />
              </Box>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {row.message}
              </Typography>
              <Typography variant="subtitle2"> {row.category}</Typography>
            </Box>
          </Box>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2">
            {format(new Date(row.date), "dd MMM yyyy")}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {format(new Date(row.date), "p")}
          </Typography>
        </TableCell>

        <TableCell>{fCurrency(row.amount)}</TableCell>

        <TableCell>
          <Label
            variant={isLight ? "soft" : "filled"}
            color={
              (row.status === "completed" && "success") ||
              (row.status === "in_progress" && "warning") ||
              "error"
            }
          >
            {sentenceCase(row.status)}
          </Label>
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

interface AvatarIconProps {
  icon: string;
}

function AvatarIcon({ icon }: AvatarIconProps) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: "text.secondary",
        bgcolor: "background.neutral",
      }}
    >
      <Iconify icon={icon} width={24} />
    </Avatar>
  );
}

interface renderAvatarProps {
  category?: string;
  avatar?: any;
}

function renderAvatar({ category, avatar }: renderAvatarProps) {
  if (category === "Books") {
    return <AvatarIcon icon="eva:book-fill" />;
  }
  if (category === "Beauty & Health") {
    return <AvatarIcon icon="eva:heart-fill" />;
  }
  return avatar ? (
    <Avatar
      alt={category}
      src={avatar}
      sx={{ width: 48, height: 48, boxShadow: (theme) => theme.shadows[8] }}
    />
  ) : null;
}
