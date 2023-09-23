import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import TopNavbar from "../common/TopNavbar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box >
  );
};

export default MainLayout;
