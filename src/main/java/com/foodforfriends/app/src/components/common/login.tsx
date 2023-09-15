import React from 'react';
import {useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
    if (!isAuthenticated) {
      return (
          <button onClick={() => loginWithRedirect()}>
            Sign In
          </button>
        );
    } else {
      return (
          <button onClick={() => logout()}>
            Logout
          </button>
        );
    }
};

export default Login;