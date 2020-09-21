var nome= "raul Ferreira"; //variável do tipo string sem tipagem
var idade = 23; //variável do tipo number/int sem tipagem
var idade_nova = 20;

alert("Olá " + nome + ", sua idade é " + idade); // concatenação simples para montar uma string


//variaveis do tipo number/int não são concatenadas pelo sinal +
//ao invés disso o JavaScript interpreta como uma soma
console.log(idade + idade_nova); //F12 quando entrar no navegador, aba console mostrará o resultado

/** 
 * trabalhando com manipulação simples de string 
 * métodos usados - Replace - UpperCase - LowerCase
 * 
*/

var frase = "O Japão é o melhor time do mundo";

//Metodo replace recebe dois parâmetros, o primeiro é a palavra/letra/conjunto que você deseja achar
//e o segundo parâmetro é a alteração que deseja ser feita

var novaFrase = frase.replace("Japão", "Brasil");
//aqui estamos trocando Japão por Brasil

console.log(novaFrase);
//resultado no console do navegador

var minuscula = frase.toLowerCase();
var maiuscula = nome.toUpperCase();
console.log("Frase começando com letra minúscula " + minuscula);
console.log("Nome começando com letra maiúscula " + maiuscula);