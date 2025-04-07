import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { HEADER } from "../../config-global";
import { useTheme } from "@mui/material/styles";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Label from "../../components/label";
import Logo from "../../components/logo";
import useResponsive from "../../hooks/useResponsive";
import useOffSetTop from "../../hooks/useOffSetTop";
import NavDesktop from "./nav/desktop";
import navConfig from "./nav/config-navigation";
const Header = () => {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <>
      <AppBar ref={carouselRef} color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_MAIN_DESKTOP,
            },
            transition: theme.transitions.create(
              ["height", "background-color"],
              {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }
            ),
          }}
        >
          <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
            <Logo />

            <Link to="">
              <Label color="info"> v4.1.0 </Label>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <NavDesktop isOffset={isOffset} data={navConfig} />
            <Button variant="contained" style={{ color: "black" }}>
              PurChase Now
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
