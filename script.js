const valorElemento = document.getElementById("valor");
const incrementarBotao = document.getElementById("incrementar");
const decrementarBotao = document.getElementById("decrementar");
const zerarBotao = document.getElementById("zerar");

let contador = 0;

function atualizarValor() {
  valorElemento.textContent = contador;
}