interface restaurantsProp {
    restaurants: any[];
    restaurantClick: (restaurant: any) => void;
}

const RestaurantList = ({ restaurants, restaurantClick }: restaurantsProp) => {
    if (Array.isArray(restaurants)) {
        restaurants = restaurants.slice(0, 5);
        return (
            <div>
                <h2>NEARBY RESTAURANTS</h2>
                <ol>
                    {restaurants.map((restaurant, index) => (
                        <li key={index} onClick={() => restaurantClick(restaurant)}>{`Name: ${restaurant.name} Address: ${restaurant.formattedAddress}`}</li>
                    ))}
                </ol>
            </div>
        );
    }
    return (
        <div>
            no array, sad (async call hasn't returned yet so need to press search again, handle this)<br></br>
            may or may not be bugged sometimes too
        </div>
    );
};

export default RestaurantList;
