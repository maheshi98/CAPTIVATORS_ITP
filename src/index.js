import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


// import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,

import Routes from './Routes';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
