import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "./RestaurantSearchBar";
import AddReviewButtons from "./AddReviewButtons";
import { Box, CircularProgress, Typography } from "@mui/material";

// TODO implement loading animation
// TODO fix submission bug where can't convert from undefined string to Double
//      only occurs sometimes when querying for restaurant, unsure of cause

const PostPage = () => {
    const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const [restaurantsSearchList, setRestaurantsSearchList] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showReviewForm, setShowReviewForm] = useState(false);

    // get user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    console.log("reached lat and lang");
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                error => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not available, please turn on location to search for restaurants");
        }
    }, []);

    const handleSearch = (query: string) => {
        const apiUrl = 'map/search';
        const queryParams = {
            queryString: query,
            lat: userLocation?.lat.toString(),
            lng: userLocation?.lng.toString(),
        };

        console.log(queryParams);

        const queryString = Object.entries(queryParams)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        fetch(`${apiUrl}?${queryString}`)
            .then(response => response.json())
            .then((data) => {
                setRestaurantsSearchList(data);
            });
    };

    const restaurantClick = (restaurant: any) => {
        setShowReviewForm(true);
        setSelectedRestaurant(restaurant);
    };

    return (
        <div>
            {userLocation ? (
                <div>
                    <RestaurantSearchBar onSearch={handleSearch} />
                    <br></br>
                    {restaurantsSearchList.length !== 0 && !showReviewForm && (
                        <RestaurantList
                            restaurants={restaurantsSearchList}
                            restaurantClick={restaurantClick}
                        />
                    )}
                    {showReviewForm && <AddReviewButtons restaurant={selectedRestaurant} />}
                </div>
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <CircularProgress size="80px" />
                    <Box m={2}>
                        <Typography variant='h5'>
                            Fetching Location
                        </Typography>
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default PostPage;
