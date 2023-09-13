import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/orders', OrdersController.list);

export default ordersRouter;