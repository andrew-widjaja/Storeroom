import React from 'react';

// import './App.css';

import 'antd/dist/antd.css';
import './index.css';
import NavContainer from './components/Nav/NavContainer.jsx';
import ItemsContainer from './components/Items/ItemsContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavContainer></NavContainer>
      <ItemsContainer></ItemsContainer>
    </div>
  );
}

export default App;
