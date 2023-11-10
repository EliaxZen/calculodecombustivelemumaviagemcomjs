// Dados
const precoGasolina = 6.66;
const precoEtanol = 5.79;
const gastoKmLitro = 10;
const distanciaKm = 100;
const combustivelUsado = 'Gasolina';

//Execução
const litrosConsumidos = distanciaKm / gastoKmLitro;
let gasto = 0;

if(combustivelUsado === 'Etanol') {
gasto =  litrosConsumidos * precoEtanol;
console.log(gasto.toFixed(2));
} else if(combustivelUsado === 'Gasolina') {
gasto = litrosConsumidos * precoGasolina;
console.log(gasto.toFixed(2));
} else {
  console.log("Não temos esse tipo de gasolina no sistema")
}
