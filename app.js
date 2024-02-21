alert('Boas vindas ao jogo do número secreto');
let variavelMaxima = 40000;
let numeroSecreto = parseInt(Math.random() * variavelMaxima + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${variavelMaxima}`);
    
    if(numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O numero secreto e maior que o ${chute}`);
        } else {
            alert(`O numero secreto e menor que o ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Parabens! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
