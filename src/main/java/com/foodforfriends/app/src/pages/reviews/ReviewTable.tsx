import { ReviewProps, RestaurantProps, RestaurantListProps } from '../../components/common/CustomTypes';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

// next step would be adding collapsible - useState + onClick and the mui icons in import statements

const ReviewRow = ({ review }: ReviewProps) => {
    return (
        <div
            className='list-group-item'
            key={review['id']}>
            review id: {review['id']}
            <br></br>
            {review['username']} said:
            <br></br>
            {review['description']}
            <br></br>
            Rating: {review['rating']}/5
            Cost: {review['cost']}/5
        </div>
    );
}

const RestaurantRow = ({ restaurant }: RestaurantProps) => {

    return (
        <div className='list-group-item'>
            {restaurant.name}
            <div className='list-group'>
                {restaurant['reviews'].map(review =>
                    <ReviewRow review={review}></ReviewRow>
                )}
            </div>
        </div>
    )
}

const ReviewTable = ({ restaurants }: RestaurantListProps) => {

    return (
        <div className='list-group'>
            {restaurants.map(restaurant =>
                <RestaurantRow restaurant={restaurant}></RestaurantRow>
            )}
        </div>
    );
};

export default ReviewTable;
