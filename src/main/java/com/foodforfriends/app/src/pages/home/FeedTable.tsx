import React from 'react';
import { ReviewListProps, ReviewProps } from '../../components/common/CustomTypes';

const Review = ({ review }: ReviewProps) => {
    return (
        <div
            className='list-group-item'
            key={review['id']}>
            On {review['dateReadable']}, {review['username']} said:
            <br />
            {review['description']}
            <br />
            Rating: {review['rating']}/5
            Cost: {review['cost']}/5
            <br />
            Id: {review['id']}
        </div>
    );
}

const FeedTable = ({ reviews }: ReviewListProps) => {

    return (
        <div className='list-group'
            key={reviews.length}>
            {reviews.map(review =>
                <Review review={review} key={review.id}/>
            )}
        </div>
    );
};

export default FeedTable;