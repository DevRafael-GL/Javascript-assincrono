const cep = fetch('./style.css')

cep.then(resolucao => {
  return resolucao.text()
}).then(body => {
  console.log(body)
  const container = document.querySelector('.container')
  const style = document.createElement('style')
  style.innerHTML = body
  console.log(style)
  container.appendChild(style)
})