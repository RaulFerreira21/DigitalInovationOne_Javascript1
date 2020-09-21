//Os array são como espaçasos de uma estante onde você consegue colocar vários livros
//Podendo dividir eles por categoria, por exemplo: Guerra - Ficção - Romance
//E dentro dessas categorias, os livros

console.log(" - Arquivo de Arrays - ");

var lista = ['maçã', "pera", "laranja"]/
//Os arrays tem uma contagem um pouco diferente do convencional
//A contagem dessa lista seria: 0, 1, 2. Formando um array de 3 posições
//No começo parece confuso mas segue um exemplo:

console.log(lista[0]); //irá exibir o primeiro item da lista, no caso a maçã
console.log("-------------------------");
console.log(lista[1]); //irá exibir o segundo item da lista, a pêra, e assim sucessivamente

/**
 * Métodos de array (POP, PUSH, LENGTH, REVERSE, TOSTRING, JOIN)
 * Push - Inserção de um elemento no array na ultima posição
 * Pop - Tira o ultimo elemento do aray
 * Length - Mostra a quantidade de elementos do array
 * Reverse - Dispôe os elementos da lista de trás para frente
 * ToString - Transforma o array em uma string, em um texto.
 * Join - Faz a transformação para string, porém, você consegue selecionar o separador dos elementos, como um traço ou qualquer outra coisa
 */

let inserirFinal = lista.push("Uva"); 
let tirarUltimoItem = lista.pop();
let tamanho = lista.length;
let contrario = lista.reverse();
let texto = lista.toString();
let separador = lista.join(" - ");

console.log(inserirFinal);
console.log("-------------------------");
console.log(tirarUltimoItem);
console.log("-------------------------");
console.log(tamanho);
console.log("-------------------------");
console.log(contrario);
console.log("-------------------------");
console.log(texto);
console.log("-------------------------");
console.log(separador);
console.log("-------------------------");
