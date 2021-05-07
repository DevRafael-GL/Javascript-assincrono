// function createButton(text) {

//   function element() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text;
//     return buttonElement
//   }
//   return Object.freeze( {
//     text: text,
//     element: element,
//   })
// }

// const btnComprar = createButton("Comprar")
// const btnVender = createButton("Vender")

// btnComprar.text = 'Casa Nova'
// console.log(btnComprar, btnVender)

function Pessoa(nome) {
  if(!(this instanceof  Pessoa)){
    return new Pessoa(nome)
  }
  this.nome = nome
}

Pessoa.prototype.correr = () => {
  return `${this.nome} correu`
}

const Dev = Pessoa('Rafael')

console.log(Dev)