import { registerProductDTO } from "../dtos/productDTO.ts";
import Product from "../models/Product.ts";

export async function register(data: registerProductDTO){
    const { name, description, price, stock, category } = data
    const createdAt = new Date()

    const product = new Product({ name, description, price, stock, category, createdAt })
    return await product.save()
}