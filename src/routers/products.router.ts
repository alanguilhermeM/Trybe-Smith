import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/products', ProductsController.list);
productsRouter.post('/products', ProductsController.create);

export default productsRouter;