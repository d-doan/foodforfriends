import React, { useEffect, useState } from 'react';
import FeedTable from './FeedTable';

type Props = {};

const HomePage = (props: Props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews-sorted')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
      })
  }, []);

  return (
    <div>
      <FeedTable reviews={reviews} />
    </div>
  );
};

export default HomePage;