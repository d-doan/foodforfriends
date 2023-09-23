import { AppBar, Toolbar, Typography } from "@mui/material"
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import appRoutes from '../../routes/appRoutes';
import Topbaritem from './Topbaritem';

const TopNavbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                ml: sizeConfigs.sidebar.width,
                boxShadow: "unset",
                backgroundColor: colorConfigs.topbar.bg,
                color: colorConfigs.topbar.color
            }}
        >
            <Toolbar>
                <Typography variant="h5">
                    Food For Friends
                </Typography>
                {appRoutes.map((route, index) => (
                    route.sidebarProps ? (
                        <Topbaritem item={route} key={index} />
                    ) : null
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default TopNavbar;
