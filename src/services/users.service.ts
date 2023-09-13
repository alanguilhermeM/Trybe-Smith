import bcrypt from 'bcryptjs';
// import { Verify } from '../types/Login';
import jwtUtil from '../utils/jwt.util';
import UserModel, { UserInputtableTypes } from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';

const verifyLogin = async (login: UserInputtableTypes): Promise<ServiceResponse<Token>> => {
  const foundUser = await UserModel.findOne({ where: { username: login.username } });
  console.log(foundUser);
  if (!foundUser?.dataValues 
    || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = foundUser.dataValues;

  if (id === undefined) {
    return { status: 'UNAUTHORIZED', data: { message: 'User id is undefined' } };
  }

  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  verifyLogin,
};