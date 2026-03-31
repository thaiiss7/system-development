import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './Login.css'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password })
            sessionStorage.setItem('token', response.data.token)

            Swal.fire({
                title: 'Sucesso!',
                text: "login efetuado com suecsso!",
                icon: "success"
            });

            return navigate('/home')

        } catch(e) {
            Swal.fire({
                title: 'Erro!',
                text: `${e}`,
                icon: "error"
            })
        }
    }

    return (
        <>
            <div className="body">
                    <div className='form'>
                        <h2>Login</h2>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email"/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                        <button onClick={handleLogin}>Login</button>
                        <div className='register-navigate'>
                            <p>Don't have an account?</p>
                            <Link to='/'>Register</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login