// Common types used in project, similar to spring POJO's
// pass in interfaces to use for props

type Review = {
    id: number;
    restaurantName: string;
    username: string;
    rating: number;
    cost: number;
    description: string;
};

type Restaurant = {
    name: string;
    reviews: Review[];
    avgRating: number;
    avgCost: number;
};

export interface ReviewProps {
    review: Review
}

export interface RestaurantProps {
    restaurant: Restaurant
}

export interface RestaurantListProps {
    restaurants: Restaurant[];
}
