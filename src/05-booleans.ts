(()=>{
  let isEnable = true;
  //isEnable = 'as';    Error: ya que isEnable se habia declarado como boolean y no es correcto asignarle un string
  //isEnable = 1212;    Error: lo propio, isEnable es un boolean y no se le puede asignar un number
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew: ',isNew);
  isNew = true;
  console.log('isNew: ',isNew);

  const randomNumberBetween0and1 = Math.random();
  console.log('randomNumber: ',randomNumberBetween0and1);
  isNew = randomNumberBetween0and1 >= 0.5 ? true : false;
  console.log('isNew: ',isNew);

  const myBoolean: boolean = true;    // al declarar explicitamente el tipado es buena practica escribir boolean con minuscula
  // const myBoolean: Boolean = true;   // M A L A     P R A C T I C A
})();
