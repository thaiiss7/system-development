import { Express } from 'express';
import express from 'express'
import product from './product.js'

export default function (app: Express) {
    app
      .use(express.json())
      .use('/api/product', product)
}
