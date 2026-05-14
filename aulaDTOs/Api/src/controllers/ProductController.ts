import { Request, Response } from "express";
import Product from '../models/Product.ts';
import { findAllProductDTO, registerProductDTO, updateProductDTO } from "../dtos/productDTO.ts";
import { deleteProduct, findAllProducts, findProduct, register, updateProduct } from "../services/product.service.ts";

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

        const products = await findProduct()

        return res.status(200).send({ response: products })
    }

    static async findAll(req: Request, res: Response){
        const data: findAllProductDTO = req.body

        const products = await findAllProducts(data)
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
        const data: updateProductDTO = req.body

        try {
            const product = await updateProduct(id.toString(), data)
             
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
            const product = await deleteProduct(id.toString())

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