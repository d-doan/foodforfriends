import { Drawer, List, Toolbar, Stack/*, Avatar, ListItemButton, ListItemIcon */ } from "@mui/material"
import sizeConfigs from "../../configs/sizeConfigs";
// import assets from "../../assets/images";
import colorConfigs from "../../configs/colorConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        {/* Sidebar Header Icon */}
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            {/* Generate Top Icon */}
            <RestaurantIcon sx={{ fontSize: "42px", color: colorConfigs.logoColor }} />
          </Stack>
        </Toolbar>
        {/* Generate Sidebar Buttons */}
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
