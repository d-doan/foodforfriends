import { ReviewProps, RestaurantProps, RestaurantListProps } from '../../components/common/CustomTypes';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// next step would be adding collapsible - useState + onClick and the mui icons in import statements

const ReviewRow = ({ review }: ReviewProps) => {
    return (
        <div
            className='list-group-item'
            key={review['id']}>
            review id: {review['id']}
            <br></br>
            On {review['datePosted']}, {review['username']} said:
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
        <div className='list-group-item'
            key={restaurant['businessName']}>
            {restaurant.businessName}
            <div className='list-group'>
                {restaurant['reviews'].map(review =>
                    <ReviewRow review={review} key={review.id} />
                )}
            </div>
        </div>
    )
}

const ReviewTable = ({ restaurants }: RestaurantListProps) => {

    return (
        <div className='list-group'
            key={restaurants.length}>
            {restaurants.map(restaurant =>
                <RestaurantRow restaurant={restaurant} key={restaurant.businessName} />
            )}
        </div>
    );
};

export default ReviewTable;
