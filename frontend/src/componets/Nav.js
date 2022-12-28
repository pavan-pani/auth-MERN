import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
const Nav = () => {
  return (
    <div>
        <ul>
            <li><a href='login'>LogIn</a></li>
            <li><a href='register'>Register</a></li>
            <li><a href='profile'>Profile</a></li>
  
        </ul>
    </div>
  )
}

export default Nav