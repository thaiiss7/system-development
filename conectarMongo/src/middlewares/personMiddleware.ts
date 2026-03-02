import { Request, Response, NextFunction, response } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, age } = req.body
    if (!name || !age) {
        return res.status(400).send({response: `Existem dados vazios`})
    }

    next()
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { name, age } = req.body
    if (!name && !age) {
        return res.status(400).send({response: `Preencha o campo que será atualizado`})
    }

    next()
}