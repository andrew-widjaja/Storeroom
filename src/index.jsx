import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './App.jsx';
import './index.css';
import 'antd/dist/antd.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
