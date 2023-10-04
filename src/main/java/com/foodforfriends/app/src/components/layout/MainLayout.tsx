import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import TopNavbar from "../common/TopNavbar";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../common/Profile";
import Login from "../common/Login";

const MainLayout = () => {
  const { isLoading, error } = useAuth0();

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

        <Box display='flex' justifyContent='flex-end'>
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <Box flexDirection='column'>
              <Profile />
              <Login />
            </Box>
          )}
        </Box>

        <Outlet />

      </Box>
    </Box >
  );
};

export default MainLayout;
