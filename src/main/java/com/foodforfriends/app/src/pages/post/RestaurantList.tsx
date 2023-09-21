import { List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';

interface restaurantsProp {
    restaurants: any[];
    restaurantClick: (restaurant: any) => void;
}

const RestaurantList = ({ restaurants, restaurantClick }: restaurantsProp) => {
    if (Array.isArray(restaurants)) {
        restaurants = restaurants.slice(0, 5);

        return (
            <Paper elevation={2}>
                <List disablePadding={true}>
                    <ListItem divider={true}>
                        <ListItemText primary={"Search Results"} />
                    </ListItem>
                    {restaurants.map((restaurant, index) => (
                        <ListItem key={index} divider={true} disablePadding={true}>
                            <ListItemButton onClick={() => restaurantClick(restaurant)}>
                                <ListItemText primary={`${index + 1}. Name: ${restaurant.name} Address: ${restaurant.formattedAddress}`} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        );
    }
    return (
        <div>
            currently retrieving user location asynchronously, need to fix this by add loading animation to signal
        </div>
    );
};

export default RestaurantList;
