import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios' 
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Update from './pages/Update';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/' element={<Register></Register>} ></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/update' element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
