// const carros = {
//   marca: 'Honda',
//   ano: 2021,
// }

// const {marca, ano} = carros

// console.log(marca, ano)

// const clientes = {
//   nome: 'Rafael',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS' , 'video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const {digitais, fisicas, digitais: {livros, videos}} = clientes.compras;

// console.log(livros)


function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}

document.addEventListener('keyup', handleKeyboard)