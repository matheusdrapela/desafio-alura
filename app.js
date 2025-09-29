function sortear () {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    
    let intervaloTotal = ate - de + 1;

    if (quantidade > intervaloTotal) {
        alert(`A quantidade de números a sortear (${quantidade}) não pode ser maior que o total de números disponíveis no intervalo de ${de} a ${ate}, que é ${intervaloTotal}.`);
        return;
    }
    if (de >= ate) {
        alert("O número no campo 'De' deve ser menor que o número no campo 'Até'.");
        return;}
        
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = geraNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
        numero = geraNumeroAleatorio (de, ate);
        }
        sorteados.push(numero);
    }

    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    reiniciarBotao();
}
function geraNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function reiniciarBotao(){
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container__botaoDesabilitado')){
    botao.classList.remove('container__botaoDesabilitado');
    botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botaoDesabilitado');
    
    }
}

function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        reiniciarBotao();
}