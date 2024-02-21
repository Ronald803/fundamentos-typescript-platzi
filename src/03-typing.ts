(()=>{
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  myProductName.toUpperCase();
  myProductPrice.toFixed();

  const myProductStock = 1000;
}) ();

// (()=>{}) ()  // Esto es una función anónima auto ejecutada
// útil ya que en este entorno (a diferencia de react, angular en donde cada archivo es un scope diferente)
// no se tienen los scopes o alcances bien definidos y al declarar la misma variable en distintos archivos
// typescript lo interpreta como error


//    Resumen Clase
// 1. TS usa tipos inferidos para "asignar" tipos de datos a vafriables sin que se las tengamos que asignar de manera explicita
// 2. Entre los beneficios de usar TS  esta el hecho de que tenemos los metodos usados a cada tipo de datos, como en el caso de
//    una variable "string", podemos acceder a el método toLowerCase de manera más rápida
// 3. Al no tener aun modularización, TS nos alerta de que ciertas variables ya han sido declaradas, esto lo podemos prevenir
//    con funciones anónimas autoejecutadas. IIFE (Inmediately Invoked Function Expression)
