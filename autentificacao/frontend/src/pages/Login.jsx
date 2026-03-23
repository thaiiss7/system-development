import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './Login.css'

export const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const verifyLogin = async () => {
        try {
        await axios.post('http://localhost:8080/api/auth/login', {
            login,
            password
        })  
        
        } catch(e) {
        console.log(e)
        }
    }

    return (
        <>
            <div className="login-form">
                <div className="login-container">
                    <p>Email: </p>
                    <input type="text" onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="login-container">
                    <p>Senha: </p>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={verifyLogin}>Login</button>
            </div>
        </>
    )

}

export default Login