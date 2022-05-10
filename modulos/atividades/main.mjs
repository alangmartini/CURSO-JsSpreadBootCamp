import { mostraCidade, mostraIdade, mostraHobby } from "./funcoes.mjs";

let myData = {
    nome: 'Alan',
    cidade : 'Cuiabá',
    idade : '24',
    hobby : 'Cozinhar',
};


console.log(mostraCidade(myData.nome, myData.cidade))
console.log(mostraHobby(myData.nome, myData.hobby))
console.log(mostraIdade(myData.nome, myData.idade))


