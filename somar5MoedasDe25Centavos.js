
function somar5MoedasDe25Centavos(quantidadeDeMoedas) {

  var valorTotal = 0;

  for (var i = 0; i < quantidadeDeMoedas; i++) {
    valorTotal = valorTotal + 0.25;
  }
  console.log(valorTotal);

}
somar5MoedasDe25Centavos(5);