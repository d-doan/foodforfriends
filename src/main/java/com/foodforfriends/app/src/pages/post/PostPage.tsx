import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "./RestaurantSearchBar";

// TODO implement loading symbol though so its not jank

// TODO implement on click handler opening review page

// TODO save to db after form

// TODO make look nicer

const PostPage = () => {
    const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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
            console.error("Geolocation is not available");
        }
    }, [])

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
                setRestaurants(data);
            });
        console.log(restaurants);
    };

    // TODO make click bring up review page
    const restaurantClick = (restaurant: any) => {
        console.log("CLICKED " + restaurant.formattedAddress);
    };

    // when something on list is clicked then bring up more shenanigans for review
    // after form is submitted, redirect to review feed?

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <h4>Search Restaurants</h4>
                <RestaurantSearchBar onSearch={handleSearch}></RestaurantSearchBar>
                <br></br>
                {restaurants.length !== 0 && <RestaurantList restaurants={restaurants} restaurantClick={restaurantClick}></RestaurantList>}
            </div>
        </div>
    );
};

export default PostPage;
