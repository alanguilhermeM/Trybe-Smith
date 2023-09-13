import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const userRouter = Router();

userRouter.post('/login', UsersController.verifyLogin);

export default userRouter;