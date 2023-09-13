import express from 'express';
import productsRouter from './routers/products.router';
import ordersRouter from './routers/orders.router';
import userRouter from './routers/users.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(ordersRouter);
app.use(userRouter);

export default app;
