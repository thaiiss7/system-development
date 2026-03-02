import { Request, response, Response } from "express";
import Person from '../models/Person.ts';

class PersonController {
    static async getUsers(req: Request, res: Response){
        try {
            const users = await Person.find()
            res.status(200).send({ response: users })
        } catch (e) {
            res.status(400).send({message: `erro`, e})
        }
    }

    static async getUserById(req: Request, res: Response){
        const { id } = req.params
        try {
            const user = await Person.findById(id)
            res.status(200).send({ response: user })
        } catch (e) {
            res.status(400).send({message: `erro`, e})
        }
    }

    static async postUsers(req: Request, res: Response){
        const { name, age } = req.body

        try {
            const person = new Person({ name, age })
            await person.save()
    
            res.status(200).send({message: `Usuario cadastrado`})
        } catch (e) {
            res.status(400).send({message: `erro`, e})
        }
    }

    static async updateUsers(req: Request, res: Response){
        const { id } = req.params
        const { name, age } = req.body

        try {
            const user = await Person.findByIdAndUpdate(id, {name, age})
            res.status(200).send({ response: `atualizando o usuario ${id} -> ${name}` })
        } catch (e) {
            res.status(400).send({message: `erro`, e})
        }

    }

    static async deleteUsers(req: Request, res: Response){
        const { id } = req.params

        try {
            const user = await Person.findByIdAndDelete(id)

            if (!user){
                res.status(404).send({message: `usuario não encontrado`})
            }
            res.status(200).send({ response: `usuario ${id} deletado`})

        } catch (e) {
            res.status(400).send({message: `erro ao deletar usuario`, e})
        }

    }

}

export default PersonController