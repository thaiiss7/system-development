import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <Link to={'/find'}>Acessar Produtos</Link>
        <Link to={'/register'}>Registrar Produtos</Link>
        <Link to={'/update'}>Editar Produtos</Link>
        <Link to={'/remove'}>Deletar Produtos</Link>
        </>
    )
}