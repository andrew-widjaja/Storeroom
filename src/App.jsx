import React from 'react';

// import './App.css';

import 'antd/dist/antd.css';
import './index.css';
import NavContainer from './components/containers/NavContainer.jsx';
import ItemsContainer from './components/containers/ItemsContainer.jsx';
import LoginContainer from './components/containers/LoginContainer.jsx';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.login.login);

  return (
    <div className="App">
      <LoginContainer></LoginContainer>
      {isLoggedIn === true && <NavContainer></NavContainer>}
      {isLoggedIn === true && <ItemsContainer></ItemsContainer>}
    </div>
  );
}

export default App;
