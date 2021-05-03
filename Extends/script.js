class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('acelerar')
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel, capacete);
    this.capacete = capacete
  }
  acelerar() {
    super.acelerar();
    console.log("acelerou muito")
  }
  empinar() {
    console.log('Moto empinou com' + this.rodas + 'rodas')
  }
}

const honda = new Moto(2, 'gasolina' , true)
const civic = new Veiculo(4, 'gasolina')
