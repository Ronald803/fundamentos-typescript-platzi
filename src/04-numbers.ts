(()=>{
  let productPrice = 100;
  productPrice = 250;
  console.log("Product Price: ", productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + "1"; // Error, ya que no puede sumar un number con un string
  customerAge = customerAge + 1;
  console.log("Customer Age: ", customerAge);

  let productInStock: number;
  console.log("Product in stock: ", productInStock); // Error, TS indica que productInStock no fue inicializado
  if(productInStock>10){            // Error, TS indica que no se puede comparar ya que no fue inicializado
    console.log("Greater than 10");
  }

  let discount = parseInt("123");
  console.log("Discount: ",discount);

  let hex = 0xfff;                // 0x  ->   es el prefijo que se debe utilizar para declarar un numero hexadecimal
  console.log("Hex: ",hex);
  let bin = 0b1110;               // 0b  ->    es el prefijo que se debe utilizar para declarar un numero binario
  console.log("binario: ",bin);

  // TIP:   para declarar de manera tipada un número:
  //       let miNumero: number = 17;
  // es buena practica que el tipo de valor este en minúscula y no en mayuscula
  //       let miNumero: Number = 17;    MALA PRACTICA
})()
