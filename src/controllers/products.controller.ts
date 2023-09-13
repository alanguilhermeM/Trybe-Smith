import { Request, Response } from 'express';
import productsService from '../services/products.service';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

async function list(_req: Request, res: Response) {
  const serviceResponse = await productsService.list();
    
  res.status(200).json(serviceResponse.data);
}

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productsService.create({ name, price, orderId });

  res.status(201).json(serviceResponse.data);
}

export default {
  create,
  list,
};