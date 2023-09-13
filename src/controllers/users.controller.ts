import { Request, Response } from 'express';
import userService from '../services/users.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function verifyLogin(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const serviceResponse = await userService.verifyLogin(req.body);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }

  res.status(200).json(serviceResponse.data);
}

export default {
  verifyLogin,
};