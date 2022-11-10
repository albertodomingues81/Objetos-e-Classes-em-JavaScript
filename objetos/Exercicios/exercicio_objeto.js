

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor (marca,cor,gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
calcularGastoDePercuso(distancia, precoCombustivel) {
  return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
}
  
}

const c3 = new Carro('Citroen','Prata', 1 / 12);
const gol = new Carro('Volskwagen','Preto' 1 / 9);

c3.calcularGastoDePercuso(70, 5);

console.log(c3.calcularGastoDePercuso(70, 5));
console.log(gol.calcularGastoDePercuso(70, 5));