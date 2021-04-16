// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const input = document.querySelector('#cep')
const btn = document.querySelector('.btn')
const div = document.querySelector('.resultadoCep')
btn.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  
  const valorInput = input.value

  buscaCep(valorInput)

}

function buscaCep(cep) {
 

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => {
  return response.text()
})
.then(resposta => {

  div.innerHTML = resposta
})
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc')

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
  })
}

// setInterval(fetchBtc, 500)

fetchBtc()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadasDisplay = document.querySelector('.piadas')
const nextJoker = document.querySelector('#nextJoker')

function piada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    console.log(piada.value)
    piadasDisplay.innerText = piada.value
  })
}

nextJoker.addEventListener('click', piada)

piada()