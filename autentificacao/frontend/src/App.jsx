import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios' 
import './App.css'
import Login from './pages/Login';
import { Register } from './pages/Register';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
