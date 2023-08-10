import React, { useEffect, useState } from 'react';
import AddReviewButtons from './AddReviewButtons';
import ReviewTable from './ReviewTable';
import DeleteReviewButton from './DeleteReviewButton';


const ReviewPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('restaurants')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
      })
  }, []);

  return (
    <div>
      <AddReviewButtons />
      <DeleteReviewButton />
      <ReviewTable restaurants={restaurants}></ReviewTable>
    </div>
  );

};

export default ReviewPage;
