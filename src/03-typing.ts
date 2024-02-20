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
