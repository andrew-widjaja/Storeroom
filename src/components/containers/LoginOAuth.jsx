import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { setLogin } from '../../loginSlice';

const clientId =
  '870413778352-3vtpln31uiods5s2v0epiioj72i624k8.apps.googleusercontent.com';

function LoginOAuth() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const loggedIn = useSelector((state) => state.login.login);
  const dispatch = useDispatch();

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    dispatch(setLogin(true));
    console.log(loggedIn);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In With Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}></GoogleLogout>
      ) : null}
    </div>
  );
}
export default LoginOAuth;
