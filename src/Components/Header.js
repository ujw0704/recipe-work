import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div className= " header">
        <ul>
            <li>
                <Link to ="/AdminLogin">Admin</Link>
            </li>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to ="/login">Login</Link>
            </li>
            <li>
                <Link to ="/recipe">Recipe</Link>
            </li>
            <li>
                <Link to ="/Addrecipe">Addrecipe</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Header
