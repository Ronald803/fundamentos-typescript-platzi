(()=>{
  let userId: string | number ;
  userId = 1212;
  userId = "asdf";

  function greeting(myText: string|number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);

    }
  }

  greeting('HoLa');
  greeting(14.789456132);
})()
