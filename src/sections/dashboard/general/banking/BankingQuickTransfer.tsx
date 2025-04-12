import { useState, useEffect, useRef } from "react";
import { SxProps, useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Link,
  Stack,
  Input,
  Button,
  Avatar,
  Dialog,
  Slider,
  Tooltip,
  TextField,
  Typography,
  CardHeader,
  DialogTitle,
  CardContent,
  DialogActions,
} from "@mui/material";
import { fCurrency } from "../../../../utils/formatNumber";
import Carousel, { CarouselArrows } from "../../../../components/carousel";

const STEP = 50;

const MIN_AMOUNT = 0;

const AVATAR_SIZE = 40;

const MAX_AMOUNT = 1000;

interface BankingQuickTransferProps {
  sx?: any;
  list: any;
  title: string;
  subheader?: string;
}

export default function BankingQuickTransfer({
  title,
  subheader,
  list,
  sx,
  ...other
}: BankingQuickTransferProps) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [autoWidth, setAutoWidth] = useState(24);

  const [amount, setAmount] = useState(0);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [selectContact, setSelectContact] = useState(0);

  const getContactInfo = list.find(
    (_: any, index: number) => index === selectContact
  );

  const carouselSettings = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "0px",
    slidesToShow: list.length > 7 ? 7 : list.length,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: any, next: any) => setSelectContact(next),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          slidesToShow: list.length > 5 ? 5 : list.length,
        },
      },
    ],
  };

  useEffect(() => {
    if (amount) {
      handleAutoWidth();
    }
  }, [amount]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleAutoWidth = () => {
    const getNumberLength = amount.toString().length;
    setAutoWidth(getNumberLength * 22);
  };

  const handleChangeSlider = (event: any, newValue: any) => {
    setAmount(newValue);
  };

  const handleChangeInput = (event: any) => {
    setAmount(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (amount < 0) {
      setAmount(0);
    } else if (amount > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT);
    }
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: 0,
          bgcolor: "background.neutral",
          ...sx,
        }}
        {...other}
      >
        <CardHeader title={title} subheader={subheader} />

        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Recent
            </Typography>

            <Link sx={{ typography: "button" }}>View All</Link>
          </Stack>

          <Box sx={{ position: "relative" }}>
            <CarouselArrows
              filled
              leftButtonProps={{
                sx: {
                  p: 0.5,
                  mt: -1.5,
                  left: -16,
                  "& svg": { width: 16, height: 16 },
                },
              }}
              rightButtonProps={{
                sx: {
                  p: 0.5,
                  mt: -1.5,
                  right: -16,
                  "& svg": { width: 16, height: 16 },
                },
              }}
            >
              <Box
                sx={{
                  mx: "auto",
                  maxWidth: AVATAR_SIZE * 7,
                  width: AVATAR_SIZE * (list.length + 1),
                }}
              >
                <Carousel ref={carouselRef} {...carouselSettings}>
                  {list.map((contact: any, index: number) => (
                    <Box key={contact.id} sx={{ py: 5 }}>
                      <Tooltip
                        key={contact.id}
                        title={contact.name}
                        arrow
                        placement="top"
                      >
                        <Avatar
                          src={contact.avatar}
                          sx={{
                            mx: "auto",
                            opacity: 0.48,
                            cursor: "pointer",
                            transition: theme.transitions.create("all"),
                            ...(selectContact === index && {
                              opacity: 1,
                              transform: "scale(1.25)",
                              boxShadow: "-4px 12px 24px 0 rgb(0,0,0,0.24)",
                            }),
                          }}
                        />
                      </Tooltip>
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </CarouselArrows>
          </Box>

          <Stack spacing={3}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              insert amount
            </Typography>

            <InputAmount
              amount={amount}
              onBlur={handleBlur}
              autoWidth={autoWidth}
              onChange={handleChangeInput}
            />

            <Slider
              value={typeof amount === "number" ? amount : 0}
              valueLabelDisplay="auto"
              step={STEP}
              marks
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              onChange={handleChangeSlider}
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Your Balance
              </Typography>
              <Typography variant="subtitle1">{fCurrency(34212)}</Typography>
            </Stack>

            <Button
              variant="contained"
              size="large"
              disabled={amount === 0}
              onClick={handleOpenConfirm}
            >
              Transfer Now
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <ConfirmTransferDialog
        open={openConfirm}
        autoWidth={autoWidth}
        amount={amount}
        contactInfo={getContactInfo}
        onClose={handleCloseConfirm}
        onBlur={handleBlur}
        onChange={handleChangeInput}
      />
    </>
  );
}

interface InputAmountProps {
  amount: number;
  autoWidth: number;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  sx?: SxProps;
}

function InputAmount({
  autoWidth,
  amount,
  onBlur,
  onChange,
  sx,
  ...other
}: InputAmountProps) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1} sx={sx}>
      <Typography variant="h5">$</Typography>

      <Input
        disableUnderline
        size="small"
        value={amount}
        inputProps={{
          step: STEP,
          min: MIN_AMOUNT,
          max: MAX_AMOUNT,
          type: "number",
        }}
        sx={{
          typography: "h3",
          "& input": {
            p: 0,
            textAlign: "center",
            width: autoWidth,
          },
        }}
        {...other}
      />
    </Stack>
  );
}

interface ConfirmTransferDialogProps {
  open: boolean;
  onBlur: () => void;
  onClose: () => void;
  amount: number;
  onChange: (value: string) => void;
  autoWidth: number;
  contactInfo: any;
}

function ConfirmTransferDialog({
  open,
  amount,
  autoWidth,
  contactInfo,
  onClose,
  onBlur,
  onChange,
}: ConfirmTransferDialogProps) {
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>Transfer to</DialogTitle>

      <Stack spacing={3} sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={contactInfo?.avatar} sx={{ width: 48, height: 48 }} />

          <div>
            <Typography variant="subtitle2">{contactInfo?.name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {contactInfo?.email}
            </Typography>
          </div>
        </Stack>

        <InputAmount
          onBlur={onBlur}
          onChange={onChange}
          autoWidth={autoWidth}
          amount={amount}
          sx={{ justifyContent: "flex-end" }}
        />

        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder="Write a message..."
        />
      </Stack>

      <DialogActions>
        <Button variant="contained" disabled={amount === 0} onClick={onClose}>
          Confirm & Transfer
        </Button>

        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
