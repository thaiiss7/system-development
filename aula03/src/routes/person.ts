import express, { Request, response, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    // .post('/registrar', (req: Request, res: Response) => {
    //     const {name, lastname} = req.body
    //     console.log(name, lastname)
    //     people.push({name, lastname})
    //     res.status(200).send({message: `Usuario cadastrado`})
    // })

    // .get('/users', (req: Request, res: Response) => {
    //     res.status(200).send({users: people})
    // })

    // .get('/users/:id', (req: Request, res: Response) => {
    //     const { id } = req.params
    //     let convertedId = Number(id)
    //     res.status(200).send({ response: people[convertedId] })
    // })

    // .get('/filtro', (req: Request, res: Response) => {
    //     const {name, lastname} = req.query
    //     res.status(200).send({ response: name, lastname })
    // })

    // .put('/atualizar/:id', (req: Request, res: Response) => {
    //     const { id } = req.params
    //     const { name, lastname } = req.body
    //     res.status(200).send({ response: `atualizando o usuario ${id} -> ${name} ${lastname}` })
    // })

    // desafio

    // registrar usuários
    .post('/register', (req: Request, res: Response) => {
        const { id, name, age } = req.body
        console.log(id, name, age)
        people.push({ id, name, age})
        res.status(200).send({message: `usuario ${name} cadastrado`})
    })

    // acessar todos os usuários
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({users: people})
    })

    // acessar usuário por id
    .get('/user/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        res.status(200).send({ response: people[convertedId] })
    })

    //acessar usuário com filtro
    .get('/filter', (req: Request, res: Response) => {
        const {name, age} = req.query
        res.status(200).send({ response: name, age })
    })

    // atulizar dados
    .put('/update/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { name, age } = req.body
        res.status(200).send({ response: `atualizando o usuario ${id} -> ${name} ${age}` })
    })

    // deletar por id
    .delete('/delete/:id', (req: Request, res: Response) => {
        const { id } = req.params
        res.status(200).send({ response: `usuario deletado`})
    })

//....

export default router;