import { addProduct,calcStock,products} from './product.service'

addProduct({
  name: 'Pro1',
  createdAt: new Date(1993,1,1),
  stock: 15
})

addProduct({
  name: 'Pro2',
  createdAt: new Date(1993,1,9),
  stock: 20,
  size: "L"
})

console.log(products);

const total = calcStock();
console.log(total);

