import express, { Request, response, Response, Router } from 'express';
import Product from '../models/Product.ts';
import ProductController from '../controllers/ProductController.ts';
import { validateRegister, validateUpdate } from '../midllewares/productMidlleware.ts';

const router: Router = express.Router();

router

    // .get('/usuarios', PersonController.getUsers)
    // .get('/usuarios/:id', PersonController.getUserById)
    // .post('/registrar', validateRegister, PersonController.postUsers)
    // .put('/atualizar/:id', validateUpdate, PersonController.updateUsers)
    // .delete('/deletar/:id', PersonController.deleteUsers)

    .post('/products', validateRegister, ProductController.create)
    .get('/products', ProductController.findAll)
    .get('/products/:id', ProductController.findById)
    .put('/products/:id', validateUpdate, ProductController.update)
    .delete('/products/:id', ProductController.remove)
    
export default router;