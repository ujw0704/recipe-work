
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
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
        <button type="submit" >
          Submit
        </button>

        <div>
            <p>please register if user is not login</p>
        <Link to ="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
