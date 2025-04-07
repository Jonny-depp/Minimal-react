import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Link } from "@mui/material";
import { HEADER } from "../../config-global";
import { bgBlur } from "../../utils/cssStyles";
import { PATH_PAGE } from "../../routes/paths";
import Logo from "../../components/logo";

interface HeaderProps {
  isOffset?: boolean;
}
export default function Header({ isOffset }: HeaderProps) {
  const theme = useTheme();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
        }}
      >
        <Logo />

        <Link
          component={RouterLink}
          to={PATH_PAGE.faqs}
          variant="subtitle2"
          color="inherit"
        >
          Need Help?
        </Link>
      </Toolbar>
    </AppBar>
  );
}
