import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('groups')
      .then(response => response.json())
      .then(data => {
        setGroups(data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <h2>DUMMY GROUP List</h2>
          {groups.map(group =>
            <div key={group['id']}>
              {group['nickname']}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

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
