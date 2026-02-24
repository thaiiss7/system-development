import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface user {
    id: number
    nome: string
    email: string
    tipo: "aluno" | "professor" | "coordenador"
    ativo: boolean
    createdAt: Date
}

const people: user[] = [];

router

// cadastrar usuarios
.post('/usuarios', (req: Request, res: Response) => {
    const {id, nome, email, tipo} = req.body

    const ativo = true
    const createdAt = new Date()
    
    const idExists = people.find((u) => u.id == id)
    if (idExists) {
        return res.status(500).send({ response: "usuário já existe"})
    }

    const emailExists = people.find((u) => u.email == email)
    if (emailExists) {
        return res.status(500).send({ response: "email já cadastrado"})
    }

    people.push({id, nome, email, tipo, ativo, createdAt})
    res.status(200).send({message: `usuario cadastrado`})
})

// acessar todos os usuarios
.get('/usuarios', (req: Request, res: Response) => {
    res.status(200).send({users: people})
})

// acessar usuarios por tipo
.get('/usuarios/:tipo', (req: Request, res: Response) => {
        const {tipo} = req.params
        const peopleByType = people.filter((u) => u.tipo == tipo)
        res.status(200).send({ response: peopleByType })
    })

// acessar usuarios por id
.get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)

        const idExists = people.find((u) => u.id == convertedId)

        if (idExists) {
            return res.status(200).send({ response: people[convertedId] })
        } else {
            return res.status(404).send({ response: "usuario não encontrado" })
        }
    })

//atualizar todos os dados de um usuario
.put('/usuarios/:id', (req: Request, res: Response) => {
        const user = people.find((u) => u.id == Number(id))

        const { id } = req.params
        const {nome, email, tipo} = req.body
        const newId = id
        const newDate = user?.createdAt

        const emailExists = people.find((u) => u.email == email)
        if (emailExists) {
            return res.status(500).send({ response: "email já cadastrado"})
        }

        if (user) {
            user.id = Number(newId)
            user.nome = nome
            user.email = email
            user.tipo = tipo
            user.ativo = true
            if(newDate) {
                user.createdAt = newDate
            } else {
                user.createdAt = new Date()
            }
        } else {
            return res.status(404).send({ response: "usuario não encontrado" })
        }

        res.status(200).send({ response: `atualizando o usuario ${id}` })
    })

export default router;