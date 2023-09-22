import { useEffect, useState } from 'react';
import FeedTable from './FeedTable';

type Props = {};

const FeedPage = (props: Props) => {
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

export default FeedPage;
