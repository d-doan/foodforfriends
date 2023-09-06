// Common types used in project, similar to spring POJO's
// pass in interfaces to use for props

type Review = {
    id: number;
    restaurantName: string;
    username: string;
    datePosted: string;
    dateReadable: string;
    rating: number;
    cost: number;
    description: string;
};

type Restaurant = {
    businessName: string;
    readableAddress: string;
    encodedLocation: LatLng;
    avgRating: number;
    avgCost: number;
    reviews: Review[];
};

type LatLng = {
    lat: number;
    lng: number;
}

export interface ReviewProps {
    review: Review;
}

export interface ReviewListProps {
    reviews: Review[];
}

export interface RestaurantProps {
    restaurant: Restaurant;
}

export interface RestaurantListProps {
    restaurants: Restaurant[];
}
