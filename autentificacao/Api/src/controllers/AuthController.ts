import { Request, response, Response } from "express";
import User from "../models/User.ts";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CryptoJS from 'crypto-js';

dotenv.config();

class AuthController {
static async register(req: Request, res: Response): Promise<any> {
    const { name, email, password } = req.body;
    console.log(name,email,password)

    const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.SECRET as string).toString();
    // console.log(passwordCrypt)
    // const passwordHash: string = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: passwordCrypt
    });

    try {
        await user.save();
        return res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
        return res.status(500).send({ message: "Something failed" });
    }
}

static async login(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body

    const user = await User.findOne({email: email})

    if(user){

        const decrytPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET as string);
        const passwordDecrypted = decrytPassword.toString(CryptoJS.enc.Utf8);
    
        if(password !== passwordDecrypted){
            return res.status(400).send({ response: "usuario ou senha inválido" })
        }
        
        const secret = process.env.SECRET

        const token = jwt.sign(
            {
                id: user.id
            },
            secret as string,
            {
                expiresIn: '2 days'
            }
        )

        return res.status(200).send({ token: token })

    } else {
        return res.status(404).send({ response: "usuario nao encontrado"})
    }

}
}

export default AuthController;