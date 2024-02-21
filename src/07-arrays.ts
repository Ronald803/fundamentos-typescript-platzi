(()=>{
  const prices = [1,2,3,4,5,100,false];
  prices.push(6);
  // prices.push("hola");   error: ya que el array prices solo puede tener numbers o booleans
  prices.push(true);

  let mixed: (number | string | boolean | Object)[] = ["hola", true];
  mixed.push(21);
  mixed.push("as")
  mixed.push({});
  mixed.push([]);

})
