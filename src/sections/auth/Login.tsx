import { Link as RouterLink } from "react-router-dom";
import { Alert, Tooltip, Stack, Typography, Link, Box } from "@mui/material";
import AuthLoginForm from "./AuthLoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Sign in to Minimal</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link component={RouterLink} to="" variant="subtitle2">
            Create an account
          </Link>
        </Stack>

        <Tooltip title="" placement="left">
          <Box
            component="img"
            alt=""
            sx={{ width: 32, height: 32, position: "absolute", right: 0 }}
          />
        </Tooltip>
      </Stack>

      <AuthLoginForm />
    </>
  );
};

export default Login;
