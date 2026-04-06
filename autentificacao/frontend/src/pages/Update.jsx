import axios from "axios"

export const Update = () => {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState("");
    // const navigate = useNavigate();

    const getProductData = async (_id) => {
        const response = axios.get(`http://localhost:8080/api/product/find/${_id}`)
        console.log(response.data.response)
        setName(response.data.response.name)
        setDescription(response.data.response.description)
        setPrice(response.data.response.price)
        setStock(response.data.response.stock)
        setCategory(response.data.response.category)
    }

    const update = async (_id) => {
        try {
            await axios.post(`http://localhost:8080/api/product/update/${_id}`, {
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

                    <button onClick={update}>Register</button>
                </div>
            </div>
        </>
    )
}

export default Update