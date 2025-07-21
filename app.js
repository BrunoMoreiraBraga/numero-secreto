let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let NumeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}

function exibirMesagemInicial(){
  exibirTextoNaTela('h1', 'jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}

exibirMesagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == NumeroSecreto){
      exibirTextoNaTela('h1', 'Parabens');
      let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
      let mesagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mesagemTentativas);
      document.getElementById ('reiniciar').removeAttribute ('disabled');
    }
    else{
      if (chute > NumeroSecreto){
      exibirTextoNaTela('h1', 'Você errou o numero secreto');
      exibirTextoNaTela('p', 'Numero maior que o numero secreto');
      }
      else{
      exibirTextoNaTela('h1', 'Você errou o numero secreto');
      exibirTextoNaTela('p', 'Numero menor que o numero secreto');
      }
      tentativas ++;
      limparCampo ();
      }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido =  parseInt(Math.random () * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}
function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}
function reiniciarJogo(){
  NumeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMesagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}