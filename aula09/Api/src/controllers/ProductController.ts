import { Request, response, Response } from "express";
import Product from '../models/Product.ts';

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

    static async findAll(req: Request, res: Response){
        const { name, category, minPrice, maxPrice, inStock } = req.query

        const products = await Product.find({
            name: name,
            category: category
        })

        res.status(200).send({ message: `fazendo get no servidor` })
    }

    static async findById(req: Request, res: Response){
        const { id } = req.params

        try {
            const product = await Product.findById(id)

            res.status(200).send({ response: product })
        } catch(e) {
            res.status(404).send({ message: `produto não encontrado`})
        }

    }

    static async update(req: Request, res: Response){
        const { id } = req.params
        const { name, description, price, stock, category } = req.body

        try {
            const product = await Product.findByIdAndUpdate(id, { name, description, price, stock, category })
             
            if (!product){
                res.status(404).send({ message: `produto não encontrado` })
            }
            res.status(200).send({ response: `atualizando produto ${id}`})
        } catch(e) {
            res.status(400).send({ message: `erro`, e })
        }
        
    }

    static async remove(req: Request, res: Response){
        const { id } = req.params

        try {
            const product = await Product.findByIdAndDelete(id)

            if(!product){
                res.status(404).send({ message: `produto não encontrado` })
            }
            res.status(200).send({ response: `deletando produto ${id}`})
        } catch(e) {
            res.status(400).send({ message: `erro`, e })
        }
    }
}

export default ProductController