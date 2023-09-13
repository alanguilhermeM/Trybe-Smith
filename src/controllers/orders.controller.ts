import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

async function list(_req: Request, res: Response) {
  const serviceResponse = await ordersService.list();
    
  res.status(200).json(serviceResponse.data);
}

export default {
  list,
};