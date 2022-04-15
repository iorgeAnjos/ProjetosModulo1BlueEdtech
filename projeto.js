console.clear();
const prompt = require('prompt-sync')();
let life = 0;
//Usei a variavel life para fazer a soma dos pontos ao decorrer do codigo.
console.log();
console.log(
    'O menino Goku saiu para uma aventura em busca das sete esferas do dragão, e ao decorrer da sua jornada teve que enfrentar diversos desafios',
);
console.log(
    'O menino Goku acabou de encontrar um javali gigante com um incrivel machado',
);
let desafio = prompt('Deseja atacar o javali? (s/n): ').toLowerCase();
//mesmo com o uso do while, eu decidi pôr o To.LowerCase para facilitar na dinâmica do projeto
while (desafio != 's' && desafio != 'n'){
    console.log('Resposta inválida!');
    desafio = prompt('Deseja atacar o javali? (s/n): ').toLowerCase();
}
if (desafio == 's') {
    life++;
    console.log();
    console.log(
        'Você derrotou o javali e conseguiu duas esferas que estavam em posse dele, a de uma e a de três estrelas, alêm de carne fresca por uma semana',
    );
} else {
    console.log();
    console.log('Você acabou fugindo, e o javali decidiu deixar de lado.');
    console.log(
        'O menino Goku continuou sua jornada comendo frutas e alguns insetos',
    );
    //Eu pensei em fazer alguns acontecimentos a depender da escolha do usuario para deixar o projeto mais interativo.
}
console.log('===========================================');
console.log(
    'Depois de 7 dias procurando, o menino Goku encontrou uma jovenzinha chamada bulma ,que está prestes a ser devorada por um dinossauro',
);
let desafio2 = prompt('Deseja ajudar a jovem Bulma?(s/n): ').toLowerCase();
while (desafio2 != 's' && desafio2 != 'n'){
    console.log('Resposta inválida!');
    desafio2 = prompt('Deseja ajudar a jovem Bulma?(s/n): ').toLowerCase();
}
if (desafio2 == 's') {
    life++;
    console.log();
    console.log(
        'Você derrotou o dinossauro e dentro dele tinha a esfera de quatro estrelas, como prova da gratidão, a jovem Bulma te entregou a esfera de duas estrelas que ela tinha guardada.',
    );
    console.log(
        'A jovem Bulma decidiu te acompanhar nessa jornada, suprimentos não serão um problema até o fim dela',
    );
} else {
    console.log();
    console.log(
        'A jovem conseguiu fugir do dinossauro com o uso de umas capsulas estranhas, infelizmente você ainda não tem o que comer, se alimentando com o que aparece na floresta',
    );
}
console.log('============================================');
console.log(
    'O menino Goku acabou de encontrar uma tartaruga que acabou se perdendo do seu amigo',
);
let desafio3 = prompt('Deseja ajudar a tartaruga?(s/n): ').toLowerCase();
while (desafio3 != 's' && desafio3 != 'n'){
    console.log('Resposta inválida!');
    desafio3 = prompt('Deseja ajudar a tartaruga?(s/n): ').toLowerCase();
}
if (desafio3 == 's') {
    life++;
    console.log();
    console.log(
        'Depois de alguns dias a tartaruga encontrou seu amigo, um velho mestre que estava em posse da esfera de cinco estrelas e a deu em gratidão ao garoto',
    );
} else {
    console.log();
    console.log(
        'O menino Goku decidiu ignorar a tartaruga e descansar um pouco',
    );
}
console.log('============================================');
console.log(
    'Depois de alguns meses o menino Goku encontrou a torre Mashuru (tambem conhecida como torre da força), com um misterioso prêmio',
);
let desafio4 = prompt(
    'Deseja participar da torre e testar os seus limites?(s/n): ',
).toLowerCase();
while (desafio4 != 's' && desafio4 != 'n'){
    console.log('Resposta inválida!');
    desafio4 = prompt('Deseja participar da torre e testar os seus limites?(s/n): ').toLowerCase();
}
if (desafio4 == 's') {
    life++;
    console.log();
    console.log(
        'O menino Goku se destacou na torre e em pouco tempo venceu todos os desafios chegando no último andar',
    );
    console.log(
        'O prêmio era a esfera do dragão de seis estrelas e um milhão em dinheiro, mas o menino Goku gastou em menos de uma hora em um restaurante chique',
    );
} else {
    console.log();
    console.log(
        'O menino Goku percebeu que essa torre é pouca coisa para ele e decidiu não entrar nela',
    );
}
console.log('===========================================');
console.log(
    'O menino Goku decidiu dar uma volta na capital do Oeste e acabou encontrando uma velha senhora que estava sendo assaltada',
);
let desafio5 = prompt('Deseja intervir na situação?(s/n): ').toLowerCase();
while (desafio5 != 's' && desafio5 != 'n'){
    console.log('Resposta inválida!');
    desafio5 = prompt('Deseja intervir na situação? (s/n): ').toLowerCase();
}
if (desafio5 == 's') {
    life++;
    console.log();
    console.log(
        'O menino Goku deu uma surra no assaltante que, logo foi capturado pela policia, que decidiu condecorar o garoto com honrarias',
    );
    console.log(
        'A senhora quis agradecer ao pequeno jovem e como não tinha muitas riquezas, decidiu dar uma pequena pedra laranja com sete estrelinhas desenhadas, era a esfera de sete estrelas!!',
    );
} else {
    console.log();
    console.log(
        'O menino Goku travou e ficou sem reação e o assaltante fugiu logo depois de roubar a bolsa da Velha',
    );
}
if (life == 5) {
    console.log('==================================');
    console.log(
        'Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.',
    );
    console.log(
        'O menino Goku conseguiu juntar as sete esferas do dragão, conseguindo realizar o seu desejo: Comer a carne mais gostosa do mundo!'
    );
}
if (life == 4) {
    console.log('===================================');
    console.log(
        'Depois de muito esforço você quase conquistou o seu objetivo, embora não de maneira perfeita.',
    );
    console.log(
        'O menino Goku chegou muito perto de juntar todas as esferas, tente novamente para que ele possa realizar o seu desejo!'
    );
}
if (life == 3) {
    console.log('===================================');
    console.log(
        'Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.',
    );
    console.log(
        'O menino Goku chegou perto, porêm acabou se passando na sua procura.'
    );
}
if (life == 2 || life == 1) {
    console.log('===================================');
    console.log(
        'Você falha, mas ainda consegue fugir da situação.'
    );
    console.log(
        'Infelizmente, nosso pequeno Goku falhou na sua busca, porêm nenhuma aventura chega ao fim se ainda tivermos vida!'
    );
}
if (life == 0) {
    console.log('===================================');
    console.log(
        'Você falha miseravelmente.'
        );
    console.log(
        'Nosso menino Goku infelizmente não conseguiu as esferas, quem sabe se ele pensar mais no proximo ele aprenda algo.'
    );
}