import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setLogin } from '../../loginSlice';

const StyledImage = styled.img`
  width: 60vw;
  height: 100vh;
  object-fit: cover;
  box-shadow: 5px 5px 15px black;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  background-color: #001529;
`;

const LoginWrapper = styled.div`
  margin: 0 1.5rem;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  /* margin-top: 0; */
  margin: 0;
  padding: 0;
  font-size: 4.5rem;
  font-family: 'MuseoModerno', cursive;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 5rem;
`;
const SubTitle = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  color: #c5c5c5;
  font-size: 1.5rem;
  font-family: 'Archivo', sans-serif;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05rem;
`;
const GoogleSignIn = styled.div`
  width: 40px;
`;

const LoginContainer = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLogin(true));
  };
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  return (
    <Wrapper>
      <StyledImage src="https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></StyledImage>
      <LoginWrapper>
        <Title>storeroom</Title>
        <SubTitle>take control over your inventory</SubTitle>

        <button onClick={handleLogin}>Sign in</button>
        <GoogleSignIn
          className="g-signin2"
          data-onsuccess="onSignIn"></GoogleSignIn>
        <a href="/" onClick={signOut}>
          Sign out
        </a>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginContainer;
