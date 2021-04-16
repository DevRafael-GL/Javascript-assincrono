const imagem = fetch('./imagem.jpg')

const div = document.createElement('div')

imagem.then(resolucao => {
  return resolucao.blob()
}).then(body => {
  const blobUrel = URL.createObjectURL(body)
  const imgDom = document.querySelector('img')
  imgDom.src = blobUrel
})