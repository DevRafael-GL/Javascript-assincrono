// function somar(a, b) {
//   return a + b
// }

function dividir(a, b) {
  return a / b
}

const somar = (a, b) => a + b
const quadrado = a => a * a

console.log(somar(2,5))
console.log(quadrado(5))


const instrumento = 'Violão';

(() => {
  const instrumento = 'guitarra'
  console.log(instrumento)
})();

console.log(instrumento)





