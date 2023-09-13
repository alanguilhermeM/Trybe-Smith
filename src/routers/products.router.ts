import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/products', ProductsController.create);

export default productsRouter;