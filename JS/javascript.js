const deck = ['<div class="card"><img src="front.png" alt=""></div>', '<div class="card"><img src="front.png" alt=""></div>', '<div class="card"><img src="front.png" alt=""></div>', '<div class="card"><img src="front.png" alt=""></div>'];
let qtdCartas;
iniciaJogo();

function iniciaJogo() {
    qtdCartas = Number(prompt('Com quantas cartas você quer jogar?'));

    if (qtdCartas % 2 == 0 && qtdCartas >= 4 && qtdCartas <= 14) {
        distribuiCartas();
    } else if (qtdCartas % 2 != 0 ) {
       alert =('Por favor insira um número par entre 4 e 14');
        iniciaJogo();
    }
    
}


