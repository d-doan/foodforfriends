import { List, ListItem, ListItemButton, ListItemText, Paper, Typography, Box } from '@mui/material';

interface restaurantsProp {
    restaurants: any[];
    restaurantClick: (restaurant: any) => void;
}

const RestaurantList = ({ restaurants, restaurantClick }: restaurantsProp) => {
    if (Array.isArray(restaurants)) {
        restaurants = restaurants.slice(0, 5);

        return (
            <Box display="flex" justifyContent="center">
                <Paper elevation={2} sx={{ width: '60%', maxWidth: 'xs' }}>
                    <List disablePadding={true}>
                        <ListItem divider={true}>
                            <ListItemText primary={
                                <Typography variant='h5'>
                                    {"Search Results"}
                                </Typography>} />
                        </ListItem>
                        {restaurants.map((restaurant, index) => (
                            <ListItem key={index} divider={true} disablePadding={true}>
                                <ListItemButton onClick={() => restaurantClick(restaurant)}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                {`${index + 1}. ${restaurant.name}`}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" sx={{ marginLeft: '1.6%' }}>
                                                {restaurant.formattedAddress}
                                            </Typography>} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>

        );
    }
    return (
        <div>
            currently retrieving user location asynchronously, need to fix this by add loading animation to signal
        </div>
    );
};

export default RestaurantList;
