import { Request, Response } from "express";
import Product from '../models/Product.ts';
import { registerProductDTO } from "../dtos/productDTO.ts";
import { register } from "../services/product.service.ts";

class ProductController {
    static async create(req: Request, res: Response){
        const data: registerProductDTO = req.body
        
        try {
            await register(data)
            return res.status(201).send({ message: `produto cadastrado`})
        } catch (e) {
            return res.status(400).send({ message: `erro ao cadastrar`, e })
        }
    }

    static async find(req: Request, res: Response){

        const products = await Product.find()

        return res.status(200).send({ response: products })
    }

    static async findAll(req: Request, res: Response){
        const { name, category, minPrice, maxPrice } = req.query
        const convertedMinPrice = Number(minPrice)
        const convertedMaxPrice = Number(maxPrice)

        const products = await Product.find({
            name: name, 
            category: category,
            price: { $gte: convertedMinPrice, $lte: convertedMaxPrice },
            stock: { $gte: 0 }
        })

        return res.status(200).send({ response: products })
    }

    static async findById(req: Request, res: Response){
        const { id } = req.params

        try {
            const product = await Product.findById(id)

            return res.status(200).send({ response: product })
        } catch(e) {
            return res.status(404).send({ message: `produto não encontrado`})
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
            return res.status(200).send({ response: `atualizando produto ${id}`})
        } catch(e) {
            return res.status(400).send({ message: `erro`, e })
        }
        
    }

    static async remove(req: Request, res: Response){
        const { id } = req.params

        try {
            const product = await Product.findByIdAndDelete(id)

            if(!product){
                return res.status(404).send({ message: `produto não encontrado` })
            }
            return res.status(200).send({ response: `deletando produto ${id}`})
        } catch(e) {
            return res.status(400).send({ message: `erro`, e })
        }
    }
}

export default ProductController