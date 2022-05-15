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
import UserBlogs from '../src/components/UserBlogs';
import AllBlogs from '../src/components/AllBlogs';
import AddBlog from '../src/components/AddBlog';
import IndividualBlog from './components/IndividualBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
        <App />
        <Routes>
          <Route path="/register" element={<Register />}/>
          <Route path="/myblogs/:id" element={<UserBlogs />}/>
          <Route path="/addblog" element={<AddBlog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/allblogs" element={<AllBlogs />}/>
          <Route path="/blogs/:id" element={<IndividualBlog />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
