

import React, { useState } from 'react';
// import './Login.css';
import { Link } from 'react-router-dom';
// import axios from "axios"
function Login() {
  const [Adminlogin, setAdminlogin] = useState({
    username: '',
    password: '',
  });

  function handlechange(e) {

    setAdminlogin({ ...Adminlogin, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(Adminlogin);
//   axios.post("http://localhost:4000/login",{adminlogin})
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.error(`Error in post request ${err}`);
//   });
  
    
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-submit">
        <input
          type="text"
          placeholder="enter your name"
          name="username"
          value={Adminlogin.username}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="enter your password"
          name="password"
          value={Adminlogin.password}
          onChange={handlechange}
        />
      <div btn>

        <button type="submit" >
          Submit
        </button>
      </div>

        <div>
            <p>please register if user is not login</p>
        <Link to ="/AdminRegister">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
