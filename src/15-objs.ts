(()=>{
  const abc = 1 + '1';

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes      //   ?  se usa para declarar un parametro opcional
  }
  const products: Product[] =[];

  const addProduct = (data: Product) => {
    products.push(data);
  }
  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993,1,1),
    stock: 15
  })

  addProduct({
    title: 'Pro2',
    createdAt: new Date(1993,1,9),
    stock: 20,
    size: "L"
  })
  console.log(products);

})()
