import React, { useState, useContext } from 'react'
import axios from 'axios'
import { store } from '../App'
import { redirect, Navigate } from 'react-router-dom'
import Profile from './Profile'

const Login = () => {

  const [token, settoken]=useContext(store)

  const [data, setdata]=useState({
    email:"",
    password:""
  })

  const changehandler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submithandler=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/login', data).then(
      res=>settoken(res.data.token)
    )
    console.log(token);
  }

  if(token){
    <Navigate to="/profile" replace={true} />
    // <Link to={'/profile'} />
    // return console.log(token);
  }
  
  return (
    <div>
    {
      token ? <Profile/> :

    
    <center>
        <form onSubmit={submithandler}>
            <label>Email</label><br/>
            <input type="text" name="email" onChange={changehandler}></input><br/>
            <label>Password</label><br/>
            <input type="password" name="password" onChange={changehandler}></input><br/><br/>
            <button type='submit' >Login In</button>
        </form>
    </center>
    
    }
    </div>
  )
}

export default Login