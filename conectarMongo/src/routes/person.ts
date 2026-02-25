import express, { Request, response, Response, Router } from 'express';
import Person from '../models/person.ts';

const router: Router = express.Router();

router
    .post('/registrar', async (req: Request, res: Response) => {
        const { name, age } = req.body
        const person = new Person({ name, age })
        await person.save()
        res.status(200).send({message: `Usuario cadastrado`})
    })

    .get('/users', async (req: Request, res: Response) => {
      const people = await Person.find()
    })

    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)

    })

    .get('/filtro', (req: Request, res: Response) => {
        const {name, age} = req.query
        res.status(200).send({ response: name, age })
    })

    .put('/atualizar/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { name, age } = req.body
        res.status(200).send({ response: `atualizando o usuario ${id} -> ${name}` })
    })

export default router;