// const promessa = new Promise((resolve, reject) => {
//   let condicao = true
//   if(condicao){
//     setTimeout(() => {
//       resolve({nome: 'Rafael', idade: 20})
//     }, 1000)
    
//   } else {
//     reject(Error())
//   }

// });

// const retorno = promessa.then(resolucao => {
//   resolucao.profissao = 'Desenvolvedor front-end'
//   return resolucao
// })
// .then(resolucao => console.log(resolucao)
// )
// .catch(rejeitada => {
//   console.log(rejeitada);
// })
// .finally(() => {
//   console.log('acabou')
// })

// console.log(retorno)


const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})
