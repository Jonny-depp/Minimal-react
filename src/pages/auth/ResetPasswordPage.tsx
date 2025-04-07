import { Link, Typography } from "@mui/material";
import { display, height } from "@mui/system";
import { PATH_AUTH } from "../../routes/paths";
import Iconify from "../../components/iconify";
import { Link as RouterLink } from "react-router-dom";
import AuthResetPasswordForm from "../../sections/auth/AuthResetPasswordForm";
import { PasswordIcon } from "../../assets/icons";

const ResetPassordPage = () => (
  <>
    <PasswordIcon sx={{ mb: 5, height: 96 }} />
    <Typography variant="h3" paragraph>
      Forget your password?
    </Typography>
    <Typography sx={{ color: "text-secondary", mb: 5 }}>
      Please enter the email address associated with your account to reset your
      password
    </Typography>
    <AuthResetPasswordForm />
    <Link
      component={RouterLink}
      to={PATH_AUTH.login}
      color="inherit"
      variant="subtitle2"
      sx={{
        mt: 3,
        mx: "auto",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <Iconify icon="eva:chevran-left" width={16} />
      Return to sign in
    </Link>
  </>
);
export default ResetPassordPage;
