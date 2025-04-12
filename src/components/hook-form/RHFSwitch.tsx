import { useFormContext, Controller } from "react-hook-form";
import {
  Switch,
  FormControlLabel,
  FormHelperText,
  SxProps,
} from "@mui/material";
import { ReactNode } from "react";

interface RHFSwitchProps {
  name?: string;
  helperText?: ReactNode;
  labelPlacement?: any;
  label: any;
  sx: SxProps;
}

export default function RHFSwitch({
  name,
  helperText,
  ...other
}: RHFSwitchProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name || ""}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            {...other}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
