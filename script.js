function concluido() {
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  var linguagem = document.getElementById("linguagem").value;
  
let mensagemBoasVindas = document.getElementById("boasVindas");
 
  mensagemBoasVindas.innerHTML = "Olá " + nome + " você tem " + idade + " anos e já está estudando " + linguagem + "!";}