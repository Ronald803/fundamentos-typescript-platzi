(()=>{
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product has changed';
  console.log('Product title: ',productTitle );

  const productDescription = "I'm bla bla bla bla asdf asdf qewr qewr zxcv"
  console.log("product Description: ",productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary);

  const cadenaDeTexto: string = "Pablito clavó un clavito";
  // const cadenaDeTexto: String = "Pablito clavó un clavito"    M A L A    P R A C T I C A , string debe ir en minuscula


})()
