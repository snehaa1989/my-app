import React, { useState } from "react";
import "./Login.css";
import swal from 'sweetalert';
async function loginUser(credentials) {
    return fetch('https://api-staging-v2.sploot.space/api/v2/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}
  

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          username,
          password
        });
        console.log(response);
        if(response.statusCode === 200 && response.data.data.authToken){
          swal("Success", "login success" , "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            localStorage.setItem('authToken', response.data.data.authToken);
            localStorage.setItem('email', username);
            window.location.href = "/blogs";
          });
        }
        else{
          swal("Error", "Error" , "error", {
            buttons: false,
            timer: 2000,
          })
        }
      }

    return (
      <div className="Login">
        <div className="auth-form-container">
        <img className="image-container" src="https://sploot.space/assets/images/sploot-logo.webp" alt="logo" />
        <div className="auth-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} className="username" onChange={(e) => setUsername(e.target.value)} type="email" placeholder="youremail@gmail.com" id="username" name="username" />
                <label htmlFor="password">password</label>
                <input value={password} className="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
        <div>
        </div>
      </div>
    )
}