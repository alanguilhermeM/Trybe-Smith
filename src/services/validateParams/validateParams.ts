import { Product } from '../../types/Product';
import { ProductInputtableTypes } from '../../database/models/product.model';
import { ServiceResponse, ServiceResponseError } from '../../types/ServiceResponse';

const validateName = (name: unknown): ServiceResponseError | undefined => {
  if (!name) {
    return { status: 'INVALID_DATA', data: { message: '"name" is required' },
    };
  }
  if (typeof name !== 'string') {
    return {
      status: 'UNPROCESSABLE',
      data: { message: '"name" must be a string' },
    };
  }
  if (name.length <= 2) {
    return {
      status: 'UNPROCESSABLE',
      data: { message: '"name" length must be at least 3 characters long' },
    };
  }
};

const validatePrice = (price: unknown): ServiceResponseError | undefined => {
  if (!price) {
    return {
      status: 'INVALID_DATA',
      data: { message: '"price" is required' },
    };
  }
  if (typeof price !== 'string') {
    return {
      status: 'UNPROCESSABLE',
      data: { message: '"price" must be a string' },
    };
  }
  if (price.length <= 2) {
    return {
      status: 'UNPROCESSABLE',
      data: { message: '"price" length must be at least 3 characters long' },
    };
  }
};

const validateParams = ({
  name,
  price,
}: ProductInputtableTypes): ServiceResponse<Product> | null => {
  const validate = validateName(name);
  if (validate) return validate;

  const validate2 = validatePrice(price);
  if (validate2) return validate2;

  return null;
};

export default validateParams;