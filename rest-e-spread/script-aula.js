// function perimetroForma(lado, totalLados = 4) {
  
//   const argArray = Array.from(arguments);
//   console.log(argArray);
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 4))
// console.log(perimetroForma(5, 2))

// function sorteio(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio)
//   })
// }

// const ganhadores = ['Maria', 'Diovana', 'Rafael']

// sorteio('Carro', ...ganhadores)

// const frutas = ['maçã', 'laranja', 'uva'];
// const legumes = ['cenoura', 'batata'];

// const comidas = [...frutas, 'peixe', ...legumes]
// console.log(comidas)


// const numeros = [1, 3, 5, 7, 9, 11, 13];
// const maiorNumero = Math.max(...numeros)

// console.log(maiorNumero)


const btns = document.querySelectorAll('button');

console.log(btns);

const btnsArray = [...btns]
console.log(btnsArray)