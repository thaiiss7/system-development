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

    .post('/create', validateRegister, ProductController.create)
    .get('/find', ProductController.find)
    .get('/findAll', ProductController.findAll)
    .get('/find/:id', ProductController.findById)
    .put('/update/:id', validateUpdate, ProductController.update)
    .delete('/delete/:id', ProductController.remove)
    
export default router;