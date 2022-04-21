import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setLogin } from '../../loginSlice';
import { Button } from 'antd';
import LoginOAuth from './LoginOAuth.jsx';

const StyledImage = styled.img`
  width: 60vw;
  height: 100vh;
  object-fit: cover;
  box-shadow: 8px 10px 20px black;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  background-color: #00213f;
`;

const LoginWrapper = styled.div`
  margin: 0 1.5rem;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 1.7rem;
  padding: 0;
  color: #c5c5c5;
  font-size: 1.5rem;
  font-family: 'Archivo', sans-serif;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05rem;
`;
const GuestLoginBtn = styled(Button)`
  width: 12vw;
  color: #c5c5c5;
  background-color: #00213f;
  /* margin: 1rem 0; */
`;
const StyledP = styled.p`
  color: #c5c5c5;
  margin: 1rem 0;
  font-family: 'Archivo', sans-serif;
  font-size: 1rem;
`;

console.log(document.cookie);

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

  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const signIn = async () => {
    const res = await fetch('/signup', settings);
    const data = await res.json();
    console.log(data);
  };

  return (
    <Wrapper>
      <StyledImage src="https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></StyledImage>
      <LoginWrapper>
        <Title>storeroom</Title>
        <SubTitle>take control over your inventory</SubTitle>
        <LoginOAuth></LoginOAuth>
        <StyledP>-------- or --------</StyledP>
        <GuestLoginBtn type="round" onClick={handleLogin}>
          Sign In as a Guest
        </GuestLoginBtn>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginContainer;
