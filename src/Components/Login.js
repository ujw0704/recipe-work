
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from "axios"
function Login() {
  const [inputdata, setInput] = useState({
    username: '',
    password: '',
  });

  function handlechange(e) {
    e.preventDefault();
    setInput({ ...inputdata, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputdata);
  axios.post("http://localhost:4000/login",{inputdata})
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.error(`Error in post request ${err}`);
  });
  
    
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-submit">
        <input
          type="text"
          placeholder="enter your name"
          name="username"
          value={inputdata.username}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="enter your password"
          name="password"
          value={inputdata.password}
          onChange={handlechange}
        />
      <div btn>

        <button type="submit" >
          Submit
        </button>
      </div>

        <div>
            <p>please register if user is not login</p>
        <Link to ="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
