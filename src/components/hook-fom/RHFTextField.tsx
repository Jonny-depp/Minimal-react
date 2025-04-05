import type { ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, type TextFieldProps } from "@mui/material";

interface RHFTextFieldProps extends Omit<TextFieldProps, "name"> {
  name: string;
  helperText?: ReactNode;
}

export default function RHFTextField({
  name,
  helperText,
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
