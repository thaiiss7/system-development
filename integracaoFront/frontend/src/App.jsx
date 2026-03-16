import { useState, useEffect } from 'react'
import axios from 'axios' 
import './App.css'

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/product/find');
    setProducts(response.data.response);
    console.log(response.data.response)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
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
    </>
  )
}

export default App
