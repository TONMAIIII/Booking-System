// components/GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onGoogleLogin }) => {
  const responseGoogle = (response) => {
    console.log(response);
    onGoogleLogin(response);
  };

  return (
    <GoogleLogin
      clientId="793800679295-endjj96ld5s6nellfj1dlolnchujpd87.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
