(()=>{
  let myNumber: number;
  let myString: string;

  // si no le doy el tipo a null y undefined explicitamente, ts lo tipea como any
  let myNull: null =  null;
  let myUndefined: undefined = undefined;

  let myNumber2: number | null = null;
  myNumber2 = 123;

  let myString2: string | undefined = undefined;
  myString2 = "asdfqwer";

  function hi(name: string | null){
    let hello = "Hello ";
    if(name){
      hello += name;
    } else {
      hello += "nobody";
    }
    console.log(hello);
  }

  function hiV2(name: string | null){
    let hello = "Hello ";
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi("Ronald");
  hi(null);

  hiV2("Victor");
  hiV2(null);

})()
