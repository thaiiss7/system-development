import { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, stock, category } = req.body

    if ( !name || !description || !price || !stock || !category ) {
        return res.status(400).send({ response: `existem dados vazios`})
    }

    next()
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body

    if ( !name || !price ) {
        return res.status(400).send({ response: `existem dados obrigatórios vazios`})
    }

    next()
}