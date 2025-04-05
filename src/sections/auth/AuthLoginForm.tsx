import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { FormProvider } from "react-hook-form";
import RHFTextField from "../../components/hook-fom/RHFTextField";
import Iconify from "../../components/iconify";

interface LoginFormValues {
  email: string;
  password: string;
}

const AuthLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: LoginFormValues) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <RHFTextField name="email" label="Email address" />
          <RHFTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button type="submit">Login</button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default AuthLoginForm;
