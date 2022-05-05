//TODO: Complete o código com uma solução possível

let media;
let line = gets().split(" ");

let coxinhas = parseInt(line[0]);
let participantes = parseInt(line[1]);

media = parseFloat(coxinhas / participantes).toFixed(2); //complete com o sinal da operação faltante entre x e y
console.log(media);