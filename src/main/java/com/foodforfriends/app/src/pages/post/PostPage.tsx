import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "./RestaurantSearchBar";
import AddReviewButtons from "./AddReviewButtons";

// TODO implement loading animation
// TODO fix submission bug where can't convert from undefined string to Double

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
            <h4>Search Restaurants</h4>
            <RestaurantSearchBar onSearch={handleSearch}></RestaurantSearchBar>
            {restaurantsSearchList.length !== 0 && !showReviewForm && <RestaurantList restaurants={restaurantsSearchList} restaurantClick={restaurantClick}></RestaurantList>}
            {showReviewForm && <AddReviewButtons restaurant={selectedRestaurant}></AddReviewButtons>}
        </div>
    );
};

export default PostPage;
