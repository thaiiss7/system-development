import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios' 
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/' element={<Register></Register>} ></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
