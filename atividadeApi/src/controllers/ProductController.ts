import { Request, response, Response } from "express";
import Product from '../models/Product.js';

class ProductController {
    static async create(req: Request, res: Response){
        const { name, description, price, stock, category } = req.body
        
        try {
            const product = new Product({ name, description, price, stock, category })
            await product.save()

            res.status(200).send({ message: `produto cadastrado`})
        } catch (e) {
            res.status(400).send({ message: `erro ao cadastrar`, e })
        }
    }
}