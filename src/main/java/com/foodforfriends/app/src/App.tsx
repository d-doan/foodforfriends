// import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { routes } from './routes';
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
const App = () => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('restaurants')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <h2>DUMMY RESTAURANT List</h2>
          {restaurants.map(restaurant =>
            <div key={restaurant['id']}>
              {restaurant['name']}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
*/

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
