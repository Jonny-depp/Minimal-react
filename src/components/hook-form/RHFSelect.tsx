import { useFormContext, Controller } from "react-hook-form";
import {
  Box,
  Chip,
  Select,
  Checkbox,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
  SxProps,
} from "@mui/material";
import { ReactNode } from "react";

interface RHFSelectProps {
  name: string;
  native: boolean;
  children: ReactNode;
  helperText?: ReactNode;
  maxHeight?: number;
  label: string;
  placeholder: string;
}

export function RHFSelect({
  name,
  native,
  children,
  helperText,
  maxHeight = 220,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    px: 1,
                    maxHeight:
                      typeof maxHeight === "number" ? maxHeight : "unset",
                    "& .MuiMenuItem-root": {
                      px: 1,
                      borderRadius: 0.75,
                      typography: "body2",
                      textTransform: "capitalize",
                    },
                  }),
                },
              },
            },
            sx: { textTransform: "capitalize" },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}

interface RHFMultiSelectProps {
  name: string;
  chip: boolean;
  label: string;
  options: any;
  checkbox: boolean;
  placeholder: string;
  helperText: ReactNode;
  sx: SxProps;
}

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}: RHFMultiSelectProps) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: any) => {
    const selectedItems = options.filter((item: any) =>
      selectedIds.includes(item.value)
    );

    if (!selectedItems.length && placeholder) {
      return (
        <Box component="em" sx={{ color: "text.disabled" }}>
          {placeholder}
        </Box>
      );
    }

    if (chip) {
      return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selectedItems.map((item: any) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item: any) => item.label).join(", ");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={sx}>
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            {...field}
            multiple
            displayEmpty={!!placeholder}
            labelId={name}
            input={<OutlinedInput fullWidth label={label} error={!!error} />}
            renderValue={renderValues}
            MenuProps={{
              PaperProps: {
                sx: { px: 1, maxHeight: 280 },
              },
            }}
            {...other}
          >
            {placeholder && (
              <MenuItem
                disabled
                value=""
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 0.75,
                  typography: "body2",
                }}
              >
                <em> {placeholder} </em>
              </MenuItem>
            )}

            {options.map((option: any) => {
              const selected = field.value.includes(option.value);

              return (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    py: 1,
                    px: 2,
                    borderRadius: 0.75,
                    typography: "body2",
                    ...(selected && {
                      fontWeight: "fontWeightMedium",
                    }),
                    ...(checkbox && {
                      p: 0.25,
                    }),
                  }}
                >
                  {checkbox && (
                    <Checkbox disableRipple size="small" checked={selected} />
                  )}

                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
