import express, { Request, response, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar', (req: Request, res: Response) => {
        const {name, lastname} = req.body
        console.log(name, lastname)
        people.push({name, lastname})
        res.status(200).send({message: `Usuario cadastrado`})
    })

    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({users: people})
    })

    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        res.status(200).send({ response: people[convertedId] })
    })

//....

export default router;