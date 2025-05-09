const valorElemento = document.getElementById("valor");
const incrementarBotao = document.getElementById("incrementar");
const decrementarBotao = document.getElementById("decrementar");
const zerarBotao = document.getElementById("zerar");
const alternarCoresCheckbox = document.getElementById("alternarCores");
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

alternarCoresCheckbox.addEventListener('change', function() {
  body.classList.toggle('modo-escuro');
  if (body.classList.contains('modo-escuro')) {
    body.style.backgroundColor = '#333';
    container.style.backgroundColor = '#555';
  } else {
    body.style.backgroundColor = 'antiquewhite';
    container.style.backgroundColor = 'yellowgreen';
  }
  localStorage.setItem('modoEscuro', body.classList.contains('modo-escuro'));
});

document.addEventListener('DOMContentLoaded', function() {
  const modoEscuroSalvo = localStorage.getItem('modoEscuro') === 'true';
  alternarCoresCheckbox.checked = modoEscuroSalvo;
  if (modoEscuroSalvo) {
    body.classList.add('modo-escuro');
    body.style.backgroundColor = '#333';
    container.style.backgroundColor = '#555';
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Tab' && !event.shiftKey && document.activeElement === zerarBotao) {
    event.preventDefault();
  alterarCoresBotao.focus();
  }
})
  
  atualizarValor();