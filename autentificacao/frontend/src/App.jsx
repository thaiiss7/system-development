import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios' 
import './App.css'
import Login from './pages/Login';

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/product/find');
    setProducts(response.data.response);
    console.log(response.data.response)
  }

  const createProducts = async () => {
    try {
      await axios.post('http://localhost:8080/api/product/create', {
        name,
        description,
        price,
        stock,
        category
      })  

      fetchProducts()
    } catch(e) {
      console.log(e)
    }

  }

  const updateProducts = async () => {
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/auth/login' element={<Login></Login>} ></Route>
        </Routes>
      </BrowserRouter>

      {/* <div className='body'>
        <div className='input-container'>
          <p>Name: </p>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className='input-container'>
          <p>Description: </p>
          <input type="text" onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className='input-container'>
          <p>Price: </p>
          <input type="text" onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div className='input-container'>
          <p>Stock: </p>
          <input type="text" onChange={(e) => setStock(e.target.value)}/>
        </div>

        <div className='input-container'>
          <p>Category: </p>
          <input type="text" onChange={(e) => setCategory(e.target.value)}/>
        </div>

        <button onClick={createProducts}>Cadastrar</button>

        <div className='products-container'>
          {
            products.map((product) => {
              return(
                <div key={product._id}>
                  <span>{product.name}</span>
                  <br></br>
                  <span>{product.price}</span>
                </div>
              )
            })
          }
        </div>

      </div> */}

    </>
  )
}

export default App
