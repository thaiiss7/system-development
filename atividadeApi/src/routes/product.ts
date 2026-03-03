import express, { Request, response, Response, Router } from 'express';
import Product from '../models/Product.js';
import ProductController from '../controllers/ProductController.js';
//import PersonController from '../controllers/personController.ts';
//import { validateRegister, validateUpdate } from '../middlewares/personMiddleware.ts';

const router: Router = express.Router();

router

    // .get('/usuarios', PersonController.getUsers)
    // .get('/usuarios/:id', PersonController.getUserById)
    // .post('/registrar', validateRegister, PersonController.postUsers)
    // .put('/atualizar/:id', validateUpdate, PersonController.updateUsers)
    // .delete('/deletar/:id', PersonController.deleteUsers)

    .post('/products', ProductController)
    .get('/products')
    .get('/products/:id')
    .put('/products/:id')
    .delete('/products/:id')
    
export default router;