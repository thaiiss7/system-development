export interface registerProductDTO{
    name: string,
    description: string,
    price: number,
    stock: number,
    category: string
}

export interface findAllProductDTO{
    name: string,
    category: string,
    minPrice: number,
    maxPrice: number
}

export interface updateProductDTO{
    name: string,
    description: string,
    price: number,
    stock: number,
    category: string
}