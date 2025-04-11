import { alpha, styled } from "@mui/material/styles";
import { useAuthContext } from "../../../auth/useAuthContext";
import { Link as RouterLink } from "react-router-dom";
import { CustomAvatar } from "../../../components/custom-avatar";
import { Typography, Link, Box } from "@mui/material";
import { PATH_DASHBOARD } from "../../../routes/paths";

const StyledRoot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const NavAccount = () => {
  const user: any = useAuthContext();
  return (
    <Link
      component={RouterLink}
      to={PATH_DASHBOARD.user.account}
      underline="none"
      color="inherit"
    >
      <StyledRoot>
        <CustomAvatar
          src={user.user.photoURL}
          alt={user.user.displayName}
          name={user.user.displayName}
        />

        <Box sx={{ ml: 2, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap>
            {user.user.displayName}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: "text.secondary" }}>
            {user.user.role}
          </Typography>
        </Box>
      </StyledRoot>
    </Link>
  );
};
export default NavAccount;
