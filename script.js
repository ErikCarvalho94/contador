const valorElemento = document.getElementById("valor");
const incrementarBotao = document.getElementById("incrementar");
const decrementarBotao = document.getElementById("decrementar");
const zerarBotao = document.getElementById("zerar");
const alternarCoresCheckbox = document.getElementById("alternarCores");
const body = document.body;
const container = document.getElementsByClassName("container")[0];
const animacaoContainer = document.getElementById("animacao-fantasma");

let contador = 0;
let animacaoFantasma = null;

function atualizarValor() {
  valorElemento.textContent = contador;
}

function carregarAnimacaoFantasma() {
  if (animacaoFantasma) {
    animacaoFantasma.destroy();
  }
  
  animacaoFantasma = lottie.loadAnimation({
    container: animacaoContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './animacao/Halloween Flying Ghost Loading.json'
  });
}

function toggleAnimacaoFantasma(mostrar) {
  if (mostrar) {
    animacaoContainer.classList.add('visivel');
    if (!animacaoFantasma) {
      carregarAnimacaoFantasma();
    } else {
      animacaoFantasma.play();
    }
  } else {
    animacaoContainer.classList.remove('visivel');
    if (animacaoFantasma) {
      animacaoFantasma.pause();
    }
  }
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
    toggleAnimacaoFantasma(true);
  } else {
    body.style.backgroundColor = 'antiquewhite';
    container.style.backgroundColor = 'yellowgreen';
    toggleAnimacaoFantasma(false);
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
    toggleAnimacaoFantasma(true);
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Tab' && !event.shiftKey && document.activeElement === zerarBotao) {
    event.preventDefault();
    alternarCoresCheckbox.focus();
  }
})
  
  atualizarValor();