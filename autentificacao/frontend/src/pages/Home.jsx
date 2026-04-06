import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios' 
import './Home.css'
import Swal from 'sweetalert2'

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:8080/api/product/find');
        setProducts(response.data.response);
        console.log(response.data.response)
    }

    const deleteProduct = async (_id) => {
        await axios.delete(`http://localhost:8080/api/product/delete/${_id}`)
        fetchProducts()
    }

    const updateProduct = async (_id) => {
        return navigate(`/update`)
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
            Swal.fire({
                title: 'Sucesso!',
                text: "usuario registrado!",
                icon: "success"
            });  

            fetchProducts()
        } catch(e) {
            Swal.fire({
                title: 'Erro!',
                text: `${e}`,
                icon: "error"
            })
        }

        setName(""),
        setDescription(""),
        setPrice(0),
        setStock(0),
        setCategory("")
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className='body'>
                <div className='left-container'>
                    <div className='form'>
                        <h2>Register Products</h2>
                        <div className='input-container'>
                            <p>Name: </p>
                            <input value={name} placeholder='Type here...' type="text" onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <p>Description: </p>
                            <input value={description} placeholder='Type here...' type="text" onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <p>Price: </p>
                            <input value={price} placeholder='Type here...' type="text" onChange={(e) => setPrice(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <p>Stock: </p>
                            <input value={stock} placeholder='Type here...' type="text" onChange={(e) => setStock(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <p>Category: </p>
                            <input value={category} placeholder='Type here...' type="text" onChange={(e) => setCategory(e.target.value)}/>
                        </div>

                        <button onClick={createProducts}>Register</button>
                    </div>
                </div>

                <div className='right-container'>
                    <div className='products-container'>
                    {
                        products.map((product) => {
                            return(
                                <div key={product._id}>
                                    <div className='product-item'>
                                        <span>{product.name}</span>
                                        <br></br>
                                        <span>{product.price}</span>
                                        <br/>
                                        <div className='actions'>
                                            <button onClick={() => updateProduct(product._id)}>Edit</button>
                                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home