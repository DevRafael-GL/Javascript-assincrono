async function puxardados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  console.log(jsonDados.aula);

  const jsonClientes = await (await responseClientes).json();
  console.log(jsonClientes.nome);


}

puxardados();
