import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux' 
import { store } from './store';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from '../src/components/Register';
import Login from '../src/components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
        <App />
        <Routes>
          <Route path="/register" element={<Register />}/>
           <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
