import { Product } from '../../src/types/Product';
const validProduct : Product = {
    id: 6,
    name: 'Product 1',
    price: 10,
    orderId: 6
}

const validProducts : Product[] = [
  {
    id: 1,
    name: "Pedra Filosofal",
    price: 20,
    orderId: 7
  },
  {
    id: 2,
    name: "Lança do Destino",
    price: 100,
    orderId: 8
  }
]

export default {
  validProduct,
  validProducts,
}