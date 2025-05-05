const valorElemento = document.getElementById("valor");
const incrementarBotao = document.getElementById("incrementar");
const decrementarBotao = document.getElementById("decrementar");
const zerarBotao = document.getElementById("zerar");
const alterarCoresBotao = document.getElementById("alterarCores");
const body = document.body;
const container = document.getElementsByClassName("container")[0];

let contador = 0;

function atualizarValor() {
  valorElemento.textContent = contador;
}

incrementarBotao.addEventListener('click', function(){
  contador++;
  atualizarValor();
})

decrementarBotao.addEventListener('click', function(){
  contador--;
  atualizarValor();
})

zerarBotao.addEventListener('click', function(){
  contador = 0;
  atualizarValor();
})

alterarCoresBotao.addEventListener('click', function() {
  if(body.style.backgroundColor === 'antiquewhite' && container.style.backgroundColor === 'yellowgreen'){
    body.style.backgroundColor = '#333';
    container.style.backgroundColor = '#555';
    container.style.color = 'white';
  } else {
    body.style.backgroundColor = 'antiquewhite';
    container.style.backgroundColor = 'yellowgreen';
    container.style.color = 'black';
  }
})

atualizarValor();