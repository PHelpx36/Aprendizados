/*
var nome = window.prompt('Qual é seu nome?');

window.alert('Bom dia, ' + nome);
window.confirm('Ta doido?');
var n1 = Number.parseInt(window.prompt('Digite um numero '+ nome + ': '));
var n2 = Number.parseInt(window.prompt('Digite outro numero '+ nome + ': '));
var soma = n1 + n2;
window.alert('A soma é: ' + soma);*/
/*function sumir() {
    $(#logo1).hide();
}
*/
var teste = document.querySelector("#teste1")

var t = document.querySelector("#teste1 img")

var soma = document.querySelector(".section1")


var divNova = document.querySelector(".section1")

var div = document.querySelector(".section1")

console.log(div)

function clicar() { //faz sumir e surgir um elemento
    div.style.display === "flex" ? div.style.display = "none": div.style.display = "flex"
}

function clicar1(){ //Cria elementos de texto sem substituilos
    var mds = document.createElement("div")

    mds.className = "Testando1"

    mds.innerText = "TESTE!"

    let lugarDoElemento = document.querySelector(".section1")

    lugarDoElemento.appendChild(mds);
}

function clicar2(){  //Copia um elemento sem substituir (apenas um)

    let lugarDoElemento = document.querySelector("#Aprendizados"); //O que vou copiar

    let teste3 = document.querySelector(".section1")
    
    teste3.appendChild(lugarDoElemento)

}


function clicar3(){ //Copia um elemento e substitui outro

    let lugarDoElemento = document.querySelector("#Aprendizados").innerHTML; //O que vou copiar

    
    let AAaaa = {
        caraca: lugarDoElemento
    }

    console.log(AAaaa.lugarDoElemento)

    document.querySelector(".section1").innerHTML = AAaaa.caraca; //aonde vou copiar

}

function clicar4(){
    let lugarDoElemento1 = document.querySelector("#Aprendizados").innerHTML

    let lugarDoElemento = lugarDoElemento1.cloneNode()

    console.log(lugarDoElemento)

    document.body.appendChild(lugarDoElemento)
}

function clicar5(){  //Copia um elemento sem substituir (apenas um)

    let lugarDoElemento = document.querySelector("#Aprendizados"); //O que vou copiar

    let teste3 = document.querySelector(".section1")
    
    teste3.append(lugarDoElemento)

}

const aonde = document.querySelector(".section1")

const oQue = document.querySelector("#testando")
const oQue1 = document.querySelector("#testando .tess")

function clicar6() {
    const novoObjeto = {
        id: generateId(),
        content: oQue,
        fixed: false,
    }
    console.log(novoObjeto.content)
    const novoElement = creatNewElement(novoObjeto.id, novoObjeto.content);

    aonde.appendChild(novoElement);
}

function generateId() {
    return Math.floor(Math.random() * 5000);
}

function creatNewElement(id, content, fixed) {

    let element = document.createElement("div")

    element = content

    return element;

}

function clicar7() {
    const lista1 = document.querySelector("#aprendizados")

    const clone = lista1.cloneNode(true)

    document.querySelector(".section1").appendChild(clone)
}