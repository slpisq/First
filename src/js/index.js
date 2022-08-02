/*
Objetivo 1 - Ao clicar no botão avançar, o slide de card deve ser trocado.
    Passo 1 - Utilizar o elemento seta avançar
    Passo 2 - Identificar o clique do usuario no botão avançar
    Passo 3 - Trocar o Slide de pokemon
    Paso 4 - Esconder os slides não selecionados
Objetivo 2 - Ao clicar no botão voltar, o slide anterios deve ser exibido.
    Passo 1 - Utilizar o elemento seta avançar
    Passo 2 - Identificar o clique do usuario no botão avançar
    Passo 3 - Trocar o Slide de pokemon
    Paso 4 - Esconder os slides não selecionados
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado (){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function monstarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function(){

   if(cartaoAtual === cartoes.length - 1) return
   
   esconderCartaoSelecionado()
    cartaoAtual++;
    monstarCartao(cartaoAtual)
})

btnVoltar.addEventListener('click', function(){

    if(cartaoAtual === 0) return

   esconderCartaoSelecionado()    
     cartaoAtual--;
     monstarCartao(cartaoAtual)

 
 })