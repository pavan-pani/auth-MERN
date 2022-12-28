import axios from 'axios'
import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { store } from '../App'

const Profile = () => {
  const [token, settoken]=useContext(store)
  const [data, setdata]=useState(null)
  useEffect(()=>{
    axios.get('http://localhost:5000/profile',{
      headers:{
        'x-token':token
      }
    }).then(res=>setdata(res.data))
      .catch((err)=>console.log(err.res.data.err))
  },[])

  if(!token){
    return <Link to={'/login'}/>
  }
  return (
    <div>
      {
        data && 
          <center>
            Well Come to {data.name}......!!!
          </center>
      }
    </div>
   
  )
}

export default Profile