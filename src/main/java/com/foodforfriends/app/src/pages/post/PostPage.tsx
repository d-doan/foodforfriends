import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "./RestaurantSearchBar";

// TODO IMPLEMENT LOCATION
// TODO ACTUALLY PROVIDE CORRECT PARAMETERS FOR API CALL

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

    // have [obj, setObj] representing result from search bar
    // if obj is null then don't display list component

    // would search result have to be returned in SearchBar component
    // is the best way to route data to component, passing it as a prop

    // need to have an onClick handler, just need to figure out where


    // when something on list is clicked then bring up more shenanigans for review
    // after form is submitted, redirect to review feed?


    // api call in this file
    // all the search bar component does is render and pass back value to main component
    // to be searched

    return (
        <div>
            wooooooooot
            <RestaurantSearchBar onSearch={handleSearch}></RestaurantSearchBar>
            {restaurants.length !== 0 && <RestaurantList></RestaurantList>}
        </div>
    );
};

export default PostPage;
