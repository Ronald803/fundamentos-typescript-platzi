(()=>{
  const calcTotal = (prices: number[]) :number=>{
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total;
  }
  const rta = calcTotal([1,2,3,4])
  console.log(rta);

  const printTotal = (prices: number[]):void=>{
    const rta = calcTotal(prices);
    console.log("El total es "+rta);
  }
  const rta2 = printTotal([1,2,3,4])    // ya que printTotal no retorna nada, rta2 es de tipo void
})()
