// import { Order } from '../types/Order';
import OrderModel, 
{ OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
// import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import sequelize from '../database/models/index';

const list = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const orders = await OrderModel.findAll({
    attributes: ['id', 'userId', 
      [sequelize.fn('JSON_ARRAYAGG', sequelize.col('productIds.id')), 'productIds']],
    include: [{ model: ProductModel, as: 'productIds', attributes: [] }],
    group: ['Order.id'],
    raw: true,
  });

  return { status: 'SUCCESSFUL', data: orders };
};

export default {
  list,
};