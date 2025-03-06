// Cometário em linha
/*Comentário
em bloco ...*/
// CRTL + ; - Atalho


// Declaração de variáveis no JS
// CONST x LET x VAR
// No escopo global CONST não pode ser alterada.

const nome = "Diego" // Uma constante precisa de um valor inicial.
let Nome // Permite iniciar a variáveç vazia.

//const nome = "Pedro" -> Resulta em um erro. 
// Let Nome -> Resulta em um erro.
var cor ="Azul"
var cor = "Amarelo"
let cidade = "Registro"
ciade = "Jacupiranga" // Let permite alterar o valor.

const message = "Hello, world! Iniciando estudos com o Javascript!"
console.log(message)

//Typeof (essecomando exibirá o tipo da variável)
const estado = "SP" //sempre precisa de um valor declarado-//"string"
const idade = 18
let endereco//não precisa de um valor delcarado
console.log(typeof(estado))
console.log(typeof(idade))
console.log(typeof(endereco))
//O Javasript é uma linguagem de tipagem dinâmica e tipagem fraca.
////////////////////////////////////////////////////////////////////////////////////////////////////////

//TIPODE DE FUÇÕES NO JAVASCRIPT
function minhaFuncao(){   
}
console.log(typeof(minhaFuncao))

//FUNÇÃO SIMPLES
function saudacao(){
    console.log("Olá, bem-vindo!")
}
saudacao()

//FUNÇÃO COM PARÂMETRO / ARGUMENTO
//Parâmetro -> É um dado que a função recebe.
//Argumento -> É um dado que é enviado para a função.
function Saudacao(nome){//PARÂMETRO
     console.log("Olá, bem-vindo " + nome)//Concatenando
     //Usando TEMPLATE STRING `´
     console.log(`Olá, bem-vindo $(nome)` 
     //${} -> Placeholder
}
Saudacao('Catarine')//Argumento

//FUNÇÃO COMMIS DE UM PARÂMETRO
function soma(n1, n2){
     let resultado = n1 + n2 
     console.log(`A soma dos dois números foi ${(resultado)}.`)
}
let n1 = 6
let n2 = 10
soma(n1, n2) 

//FUNÇÃO COM RETORNO
function Soma(n1, n2){
    return n1 + n2
}
console.log(`A soma dos dois núemors foi ${Soma(2,6)}.`)

//FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n){
    if(n % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let num = 4 
console.log(parImpar(num))
comsole.log(`O número ${num} é ${parImpar(num)}!`)

//FUNÃO ANONIMA
let dobro = function(x) {
    return x*2
}
console.log(dobro(15))
console.log(`O dobro do númro é ${dobro(15)}!`)

//ARROW FUNCION COM PARÂMETRO ÚNICO
//FUNÇÃO FLECHA
const Dobro = x => {// se for mais que um parâmetro ()
    return x*2
}
console.log(`Função dobro com Arrow Function. Resultado: ${Dobro(20)}.`)

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é ${calc(6, '*, 6')}.`)

//SIMPLIFICANDO ARROW FUNCTION 
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado da operção é ${Calc(7, '*, 7')}.`)

//IIFE- Imediately Invoked Function Expression
//Função Imediata - última 
const iife = (function() {
    console.log("Estou sendo executado imediatamente...")
})()

//IIFE COM PARÂMETRO 
const start = (function(app){
    console.log(`Executando imdetiatamente o app ${app}.`)
}("whatsappp")
