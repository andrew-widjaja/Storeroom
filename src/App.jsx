import React from 'react';

// import './App.css';

import 'antd/dist/antd.css';
import './index.css';
import NavContainer from './components/containers/NavContainer.jsx';
import ItemsContainer from './components/containers/ItemsContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavContainer></NavContainer>
      <ItemsContainer></ItemsContainer>
    </div>
  );
}

export default App;
