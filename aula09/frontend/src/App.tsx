import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Update } from './pages/Update'

function App() {

  const [products, setProducts] = useState<any>([])

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/api/product/products")
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={'/'}>Home </Link>
          <Link to={'/register'}>Cadastro</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
