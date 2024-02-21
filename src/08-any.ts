(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = "hola";
  myDynamicVar = {};
  //     any
  // es un tipo de dato exclusivo de typescript. su traduccion es "cualquiera"
  // nos permite almacenar cualquier tipo de dato en una variable
  // no es recomendable usar este tipo de dato, es considerado mala practica

  // la utilidad de "any" es para situaciones en las que se quiera migrar de a poco de js a ts

  // se pueden realizar conversiones a tiops de datos primitivos de js, tambien conocido como cast
  myDynamicVar = "Hola";
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);

})()
