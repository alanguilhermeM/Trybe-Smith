import { Product } from '../types/Product';
import ProductModel, 
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const list = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

const create = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);

  const responseService: 
  ServiceResponse<Product> = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
};

export default {
  create,
  list,
};