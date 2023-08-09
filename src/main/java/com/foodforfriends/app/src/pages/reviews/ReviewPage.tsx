import React, { useEffect, useState } from 'react';
import ReviewTable from './ReviewTable';


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
    <ReviewTable restaurants={restaurants}></ReviewTable>
  );

  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <div className="App-intro">
  //           <h2>Review List</h2>
  //           {restaurants.map(restaurant =>
  //             <div key={restaurant['id']}>
  //               Review #{restaurant['id']}: {restaurant['username']} said "{restaurant['description']}"
  //             </div>
  //           )}
  //         </div>
  //       </header>
  //     </div>
  //   );
};

export default ReviewPage;
