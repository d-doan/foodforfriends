import React, { useEffect } from 'react';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user } = useAuth0();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const navigate = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;

  const postUser = () => {
    // authenticate through Auth0
    // loginWithRedirect();

    // add user to db if does not exist
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user?.email,
        displayName: user?.name,
        email: user?.email,
        picture: user?.picture,
        friendList: [],
        reviews: []
      })
    };

    console.log("User: " + requestOptions.body);

    fetch('user', requestOptions)
      .then(response => {
        if (!response.ok) {
          // alert("This user cannot be created, please try again");
          // throw new Error(`HTTP Error. Status: ${response.status}`);
        }
      })
      .then(data => {
        navigate('/');
      })
      .catch((error) => {
        // alert("An error has occured, please try again")
      })
    };

    useEffect(() => {
      if (isAuthenticated) {
        postUser();
      }
    }, [])
      
    if (!isAuthenticated) {
      return (
        <button onClick={() => loginWithRedirect()} style={{width:'80px', height:'30px'}}>
              Sign In
        </button>
        );
    } else {
      return (
          <button onClick={() => logout()} style={{width:'80px', height:'30px'}}>
            Logout
          </button>
        );
    }
};

export default Login;