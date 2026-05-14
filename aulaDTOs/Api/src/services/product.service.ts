import { findAllProductDTO, registerProductDTO, updateProductDTO } from "../dtos/productDTO.ts";
import Product from "../models/Product.ts";

export async function register(data: registerProductDTO){
    const { name, description, price, stock, category } = data

    const product = new Product({ name, description, price, stock, category })
    return await product.save()
}

export async function findProduct() {
    const products = await Product.find()
    return products
}

export async function findAllProducts(data: findAllProductDTO) {
    const { name, category, minPrice, maxPrice } = data
    const convertedMinPrice = Number(minPrice)
    const convertedMaxPrice = Number(maxPrice)

    const products = await Product.find({
        name: name, 
        category: category,
        price: { $gte: convertedMinPrice, $lte: convertedMaxPrice },
        stock: { $gte: 0 }
    })

    return products
}

export async function updateProduct(id: string, data: updateProductDTO) {
    const { name, description, price, stock, category } = data

    const product = await Product.findByIdAndUpdate(id, { name, description, price, stock, category })
    return product
}

export async function deleteProduct(id: string) {
    const product = await Product.findByIdAndDelete(id)
    return product
}