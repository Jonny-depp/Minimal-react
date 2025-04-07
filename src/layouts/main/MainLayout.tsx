import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};
export default MainLayout;
