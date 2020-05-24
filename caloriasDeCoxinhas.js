function caloriasDeCoxinhas(quantidadeDeCoxinhas){
  var totalCalorias = 0;  

  for(var i = 0; i < quantidadeDeCoxinhas; i++) {
    totalCalorias = totalCalorias + 300;
  }

  console.log (totalCalorias);
}

caloriasDeCoxinhas(2)