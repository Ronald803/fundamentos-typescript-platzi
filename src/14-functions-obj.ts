(()=>{
  const login = (data: {email:string,password:number})=>{
    console.log(data.email, data.password);
  }
  login({
    email: "pabloperez@gmail",
    password: 123
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] =[];

  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes      //   ?  se usa para declarar un parametro opcional
  }) => {
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
