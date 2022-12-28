import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [data, setdata]=useState({
    // name:"",
    email:"",
    password:"",
    ConfirmPassword:""

  })

  const changehandler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submithandler=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/register', data).then(
      res=>alert(res.data)
    ).catch((err)=>console.log(err.res.data.err))
    //console.log(data);
  }
  return (
    <center>
         <form onSubmit={submithandler}>
            {/* <label>Name</label><br/>
            <input type="text" name="name" onChange={changehandler}></input><br/> */}
            <label>Emial</label><br/>
            <input type="text" name="email" onChange={changehandler}></input><br/>
            <label>Password</label><br/>
            <input type="password" name="password" onChange={changehandler}></input><br/>
            <label>Confirm Password</label><br/>
            <input type="password" name="ConfirmPassword" onChange={changehandler}></input><br/><br/>
            <button type='submit'>Sign Up</button>
        </form>
    </center>
  )
}

export default Register