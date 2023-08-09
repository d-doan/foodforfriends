import React, { useEffect, useState } from 'react';
import AddReviewButtons from './AddReviewButtons';

type Props = {};

const ReviewPage = (props: Props) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('reviews')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <AddReviewButtons />
          <h2>Review List</h2>
          {restaurants.map(restaurant =>
            <div key={restaurant['id']}>
              Review #{restaurant['id']}: {restaurant['username']} said "{restaurant['description']}"
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default ReviewPage;