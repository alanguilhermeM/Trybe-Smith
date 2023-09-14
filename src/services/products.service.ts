import { Product } from '../types/Product';
import ProductModel, 
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import validateParams from './validateParams/validateParams';

const list = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

const create = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  let responseService: ServiceResponse<Product>;
  const error = validateParams(product);
  if (error) {
    responseService = error;
    return responseService;
  }
  const newProduct = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
};

export default {
  create,
  list,
};