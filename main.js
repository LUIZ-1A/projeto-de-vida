<const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
botoes[i].onclick = function () {

for (let j = 0; j < botoes.length; j++) {
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-04-20T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
if (tempoFinal > 0) {
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
} else {
  return [0, 0, 0, 0];
}
}
//comecaCronometro();
<>
    //comecaCronometro();
<div class="aba-conteudo ativo">
  <h3 class="aba-conteudo-titulo-principal">Estudar 4 cursos na Alura</h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador">
    <div class="contador-digito">
      <p class="contador-digito-numero" id="dias0">7</p>
      <p class="contador-digito-texto">dias</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="horas0">7</p>
      <p class="contador-digito-texto">horas</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="min0">7</p>
      <p class="contador-digito-texto">min</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="seg0">7</p>
      <p class="contador-digito-texto">seg</p>
    </div>
  </div>
</div>
<div class="aba-conteudo">
  <h3 class="aba-conteudo-titulo-principal">Criar 5 projetos em Javascript</h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador">
    <div class="contador-digito">
      <p class="contador-digito-numero" id="dias1">7</p>
      <p class="contador-digito-texto">dias</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="horas1">7</p>
      <p class="contador-digito-texto">horas</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="min1">7</p>
      <p class="contador-digito-texto">min</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="seg1">7</p>
      <p class="contador-digito-texto">seg</p>
    </div>
  </div>
</div>
<div class="aba-conteudo">
  <h3 class="aba-conteudo-titulo-principal">
    Criar um portfolio com os meus 3 melhores projetos
  </h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador">
    <div class="contador-digito">
      <p class="contador-digito-numero" id="dias2">7</p>
      <p class="contador-digito-texto">dias</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="horas2">7</p>
      <p class="contador-digito-texto">horas</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="min2">7</p>
      <p class="contador-digito-texto">min</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="seg2">7</p>
      <p class="contador-digito-texto">seg</p>
    </div>
  </div>
</div>
<div class="aba-conteudo">
  <h3 class="aba-conteudo-titulo-principal">
    Atualizar meu curriculo com os certificados da Alura
  </h3>
  <h4 class="aba-conteudo-titulo-secundario">
    Tempo para completar o objetivo
  </h4>
  <div class="contador">
    <div class="contador-digito">
      <p class="contador-digito-numero" id="dias3">7</p>
      <p class="contador-digito-texto">dias</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="horas3">7</p>
      <p class="contador-digito-texto">horas</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="min3">7</p>
      <p class="contador-digito-texto">min</p>
    </div>
    <div class="contador-digito">
      <p class="contador-digito-numero" id="seg3">7</p>
      <p class="contador-digito-texto">seg</p>
    </div>
  </div>
</div>