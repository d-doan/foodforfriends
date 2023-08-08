// Common types used in project, similar to spring POJO's

export type Review = {
    id: number;
    restaurantName: string;
    rating: number;
    cost: number;
    description: string;
};

export type Restaurant = {
    name: string;
    avgRating: number;
    avgCost: number;
};
