import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "./RestaurantSearchBar";
import AddReviewButtons from "./AddReviewButtons";

// TODO implement loading symbol though so its not jank

// TODO implement on click handler opening review page

// TODO save to db after form

// TODO make look nicer

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

                    console.log(latitude + " " + longitude);
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
        console.log(restaurantsSearchList);
    };

    // TODO make click bring up review page
    const restaurantClick = (restaurant: any) => {
        // TODO: uncomment line below this later
        setShowReviewForm(true);
        setSelectedRestaurant(restaurant);
        console.log("CLICKED " + restaurant.formattedAddress);
        // open to form that calls the createReview function with 2 parameters
    };

    // when something on list is clicked then bring up more shenanigans for review
    // after form is submitted, redirect to review feed?

    // TODO
    // make restaurnta list rendering based on onClick
    // also make form rendering based on onClick status
    // not necessary use onClick var since we also need the x/back button of form
    // to close form and rerender list

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
