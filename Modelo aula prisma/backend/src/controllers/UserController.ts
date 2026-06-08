import { Request, response, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { deleteUser, registerUser, showUsers, updateUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            await registerUser(data)
            return res.status(200).send({ response: "deu boa" })
        }
        catch(e){
            return res.status(500).send({ response: "erro" })
        }
    }

    static async show(req: Request, res: Response){
        try{
            await showUsers()
            return res.status(200).send({ response: "deu boa" })
        }
        catch(e){
            return res.status(404).send({ response: "not found" })
        }
    }

    static async update(req: Request, res: Response){
        const {id} = req.params
        const data: updateUserDto = req.body
        try{
            await updateUser(Number(id), data)
            return res.status(200).send({ response: "deu boa" })
        }
        catch(e){
            return res.status(404).send({ response: "not found" })
        }
    }

    static async delete(req: Request, res: Response){
        const {id} = req.params
        try{
            await deleteUser(Number(id))
            return res.status(200).send({ response: "deu boa" })
        }
        catch(e){
            return res.status(404).send({ response: "not found" })
        }
    }
}
