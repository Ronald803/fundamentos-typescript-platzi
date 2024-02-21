(()=>{
  // ------------- Esta es la forma usual de hacerlo, pero existe una manera más práctica ---------------
  // let userId: string | number | boolean;

  // function greeting(myText: string | number | boolean){
  //   if(typeof userId === 'string'){
  //     console.log(`string ${userId.toLocaleLowerCase()}`);
  //   }
  // }


  // ------------- Manera más práctica con ALIAS--------------------
  type UserID = string | number | boolean;  // se crea un type el cual nos permite que el codigo sea mas practico
  let userId: UserID;

  function greeting(myText: UserID){
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = "XL";
  // shirtSize = "pequeño"     // esto marcaria un error ya que no esta dentro de las posibles opciones para esta variable

  function greeting2 (userId: UserID, size: Sizes){
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting2(123,"M");
  greeting2("ciento veinte y tres", "S")
})()
