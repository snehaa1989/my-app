import './App.css';
import { Login } from './containers/Login/Login';
import  Blogs  from './containers/Blogs/Blogs';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
function App() {
  const [currentForm, setcurrentForm] = useState("login");
  const token = localStorage.getItem('authToken');
  const toggleForm = (formName) => {
    console.log(formName);
    setcurrentForm(formName);
  }
  return (
    <div className="App">
      {
        !token ? <Login onFormSwitch = {toggleForm} /> : <Blogs />
      }
    </div>
  );
}

export default App;
