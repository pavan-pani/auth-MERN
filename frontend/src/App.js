import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Login from './componets/Login';
import Nav from './componets/Nav';
import Register from './componets/Register';
import Profile from './componets/Profile';
import { createContext, useState } from 'react';

export const store=createContext()

function App() {
  const [token, settoken]=useState(null)
  return (
    <div>
    <store.Provider value={[token, settoken]}>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </store.Provider>
      
    </div>
  );
}

export default App;
