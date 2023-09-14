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

const noName = {
  id: 6,
  name: '',
  price: 10,
  orderId: 6
}

const emptyName = {
  id: 6,
  name: 'a',
  price: 10,
  orderId: 6
}

const numberName = {
  id: 6,
  name: 1,
  price: 10,
  orderId: 6
}

const noPrice = {
  id: 6,
  name: 'Qualquer',
  price: '',
  orderId: 6
}

const emptyPrice = {
  id: 6,
  name: 'qualquer',
  price: '10',
  orderId: 6
}

const numberPrice = {
  id: 6,
  name: 'qualquer',
  price: 10,
  orderId: 6
}

export default {
  validProduct,
  validProducts,
  noName,
  emptyName,
  numberName,
  noPrice,
  numberPrice,
  emptyPrice,
}