import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import './Update.css'

export const Update = () => {

    const { id } = useParams();
    // console.log(id)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const getProductData = async (id) => {
        const response = await axios.get(`http://localhost:8080/api/product/find/${id}`)
        console.log(response.data)
        setName(response.data.response.name)
        setDescription(response.data.response.description)
        setPrice(response.data.response.price)
        setStock(response.data.response.stock)
        setCategory(response.data.response.category)
    }

    const update = async (id) => {

        Swal.fire({
            title: 'Confimar atualização?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"

        }).then(async (result) => {
            if(result.isConfirmed) {
                try {
                    await axios.put(`http://localhost:8080/api/product/update/${id}`, {
                        name,
                        description,
                        price,
                        stock,
                        category
                    })
                    Swal.fire("atualizado com sucesso", "", "success")
                    navigate('/home')
                } catch(e) {
                    console.log(e)
                    Swal.fire("erro!", "", "error")
                }
            }
        })
    }

    useEffect(() => {
        getProductData(id)
    },[])

    if (!id) return <p>ID inválido</p>

    return(
        <>
            <div className='body'>
                <div className='form'>
                    <h2>Update Product</h2>
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

                    <button onClick={() => update(id)}>Update</button>
                </div>
            </div>
        </>
    )
}

export default Update