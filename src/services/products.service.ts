import { Product } from '../types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const create = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);

  const responseService: 
  ServiceResponse<Product> = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
};

export default {
  create,
};