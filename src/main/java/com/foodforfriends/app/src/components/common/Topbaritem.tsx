import { RouteType } from '../../routes/config';
import { ListItemButton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import colorConfigs from '../../configs/colorConfigs';

type Props = {
    item: RouteType;
};

const Topbaritem = ({ item }: Props) => {

    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.topbar.hoverBg
                    },
                    paddingX: "24px"
                }}
            >

                <Typography variant="h5" sx={{ textAlign: 'center', width: '100%' }}>
                    {item.sidebarProps.displayText}
                </Typography>
            </ListItemButton>

        ) : null
    );
};

export default Topbaritem;
