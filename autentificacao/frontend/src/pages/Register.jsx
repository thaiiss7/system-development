import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Swal from 'sweetalert2'
import axios from 'axios'

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {
        try{
            await axios.post('http://localhost:8080/api/auth/register', {name, email, password})
            Swal.fire({
                title: 'Sucesso!',
                text: "usuario registrado!",
                icon: "success"
            });

            return navigate('/login')

        } catch (e) {
            Swal.fire({
                title: 'Erro!',
                text: `${e}`,
                icon: "error"
            })
        }
        setName(""),
        setEmail(""),
        setPassword("")
    }

    return(
        <>
            <div className="body">
                <div className='form'>
                    <h2>Register</h2>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="name"/>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email"/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                    <button onClick={handleRegister}>Register</button>
                    <div className='login-navigate'>
                        <p>Already have an account?</p>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register