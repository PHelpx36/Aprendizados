//Criando variáveis
let nome = 'Victor';
let idade = 21;
let aprovado = true;
let sobrenome = undefined;
var idade1 = idade;

console.log('Victor tem '+idade+' anos')

//Testando a variável dinamica undefined
sobrenome = 'Amadeu';

//Criando objetos
let pessoa = {
    nome: 'Victor',
    idade: idade1,
    sobrenome: 'de Lima',
    permissao: 'comum'
}
let pessoa1 = pessoa;

//Chamando pelo objeto
console.log(pessoa)
console.log(pessoa)
console.log(pessoa)
console.log(pessoa)
console.log(pessoa);
console.log(pessoa.idade);

//array
let lista = [1,3,'victor'];
console.log(lista.length);
console.log(lista[2]);

//Criando função
function alteraNome (alteracao, alteracao2){
    pessoa.nome = alteracao + ' ';
    pessoa.sobrenome = alteracao2;
};

//Usando a função
console.log(pessoa.nome, pessoa.sobrenome);
alteraNome("Cassio" , "Pereira");
console.log(pessoa.nome, pessoa.sobrenome);

function multiplicarPor2 (valor) {
    return valor*2
}

let resultado = multiplicarPor2(3);

console.log(resultado);

//Testa se os termos tem igualdade e responder em boolean
console.log (1 === 1);
console.log ('1' === 1);
//Igualdade solta
console.log ('1' == 1);

//fazendo operado lógico SE
let maiorMenor = pessoa.idade >= 20 ? 'Victor é adulto' : 'Victor é adolescente';
console.log(maiorMenor);

let agora = new Date();
let hora = agora.getHours();
console.log(hora)

if(hora <= 12){
    console.log('bom dia!');
}else if(hora > 12 && hora <= 18){
    console.log('boa tarde!');
}
else {
    console.log('boa noite!');
}

switch (pessoa.permissao) {
    case 'comum':
        console.log('usuário comum');
        break;
    
    case 'gerente':
        console.log('usuário gerente');
        break;
   
    case 'diretor':
        console.log('usuário diretor');
        break;

    default:
        console.log('Usuário não reconhecido')
}
console.log('for');
for(let i = 0 ; i <= 5; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
console.log('while');
let i = 0;
while(i <= 5){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;   
}

console.log('do while');

let j = 0;
do{
    if(j % 2 !== 0){
        console.log(j);
    }
    j++;
}while(j <= 5);

console.log('for in objeto');

for(let key in pessoa){
    console.log(key);
}

console.log('for in lista');

for(let indice in lista){
    console.log(indice, lista[indice])
}

console.log('for of');

for(let indice of lista){
    console.log(indice);
}

function numMaior(num1, num2){
    if(num1 > num2)
        return num1;
    return num2;
}
let maior = numMaior(3,5);
console.log(maior);

console.log('Testando lógica')
let numeros = [1,3,5,6,780,76,23,123];
let bigger = 0;

function maiorNum(numeros){
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i]>bigger)
            bigger = numeros[i];
    }
}
maiorNum(numeros);
console.log(bigger);


var n1 = 1700.5;
console.log(n1)
console.log(n1.toFixed(2));
console.log(n1.toFixed(2).replace('.',','));

console.log(n1.toLocaleString('pt-BR',{style: 'currency' , currency: 'BRL'}))

function clicar() {
    let a = window.document.getElementById('área');
    a.innerText = 'Clicou!';
    a.style.background = 'red';
}
function entrar() {
    let a = window.document.getElementById('área');
    a.innerText = 'Entrou!';
    a.style.background = 'darkgreen';
}
function sair() {
    let a = window.document.getElementById('área');
    a.innerText = 'Testando'
    a.style.background = 'green';
}

function clicar1() {

    a.innerText = 'Clicou!';
    a.style.background = 'red';
}
function entrar1() {
    
    a.innerText = 'Entrou!';
    a.style.background = 'darkgreen';
}
function sair1() {
    
    a.innerText = 'Testando'
    a.style.background = 'green';
}
var a = window.document.getElementById('área2');
a.addEventListener('click', clicar1);
a.addEventListener('mouseenter', entrar1);
a.addEventListener('mouseout', sair1);


function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    res.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}`
}

function tempo(){
    var tn1 = window.document.getElementById('txtn3')
    n1 = Number(tn1.value)
    
    if(n1 > 60){
        sheet.innerHTML = `Você estouro o limite de tempo de trabalho.`
    }
    else if(n1 < 60){
        sheet.innerHTML = `Trabalhou menos! Vai faze hora extra!`
    }
    else{
        sheet.innerHTML = `Horário normal, so segue.`
    }
}