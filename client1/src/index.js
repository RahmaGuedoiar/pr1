import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import ShopContextProvider from './Context/ShopContext'
import axios  from 'axios';
import Store from '../src/Redux/Store';
axios.defaults.baseURL='http://localhost:5000'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <ShopContextProvider>
  <BrowserRouter>
  
  <React.StrictMode>
    
    <App />

  </React.StrictMode>
 
  </BrowserRouter>
  </ShopContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
