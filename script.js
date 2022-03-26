function concluido() {
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  var linguagem = document.getElementById("linguagem").value;
  var boasVindas = `Olá ${nome} você tem ${idade} anos e já está estudando ${linguagem}!`;

  document.getElementById("boasVindas").innerHTML = boasVindas;
}
