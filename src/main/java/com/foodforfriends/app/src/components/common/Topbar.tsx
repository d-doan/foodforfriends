import { AppBar, Toolbar, Typography } from "@mui/material"
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import Login from "./Login";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Topbar = () => {
  const { isLoading, error } = useAuth0();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h5">
          Food For Friends
        </Typography>
        {/* <div style={{display:'flex', alignItems:'end'}}>
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
              <Profile />
              <Login />
            </>
          )}
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
