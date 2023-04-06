//Elementos

const lugar = document.querySelector(".register");
const lugar1 = document.querySelector("#register");

const btnAdd = document.querySelector("#add");
const btnRemove = document.querySelector("#remove");

const btnAdd1 = document.querySelector("#add1");
const btnRemove1 = document.querySelector("#remove1");

let element = undefined; 





//Função


function deleteForm() {     //Olhando para o PAI

    const ulti = document.querySelector(".register")
    ulti.lastChild.remove()
}

function deleteForm1(ulti){     //Array

    node = document.querySelectorAll(ulti)
    array = Array.from(node)
    array.pop().remove()
}



function addForm() {
    
    const novoElemento = criarElemento();

    lugar.appendChild(novoElemento);
}

function addForm1() {
    
    let novoElemento = criarElemento();

    novoElemento = criarElemento1(element);

    cont = document.querySelectorAll(".form")

    lugar1.appendChild(novoElemento);
}

btnAdd.addEventListener("click", () => addForm())

btnRemove.addEventListener("click", () => deleteForm())

btnAdd1.addEventListener("click", () => addForm1())

$(".clonar").on("click", clonar)

// $("#remove1").on("click", deleteForm1(".form"))

btnRemove1.addEventListener("click", () => {
    deleteForm1(".form")
    desabilitarBtn();
})



function desabilitarBtn() {
    $(document).ready(() => {
        cont = document.querySelectorAll(".form")
    })
    
    array = Array.from(cont)
    
    if(array.length = 0){
        btnRemove1.classList.add("disabled")
    }
    else{
        btnRemove1.classList.remove("disabled")
    } 
}

function criarElemento() {    
    
    element = document.createElement("div")
    
    element.classList.add("item-holder")
   
    const item = document.createElement("div")
    
    item.classList.add("item")

    element.appendChild(item)
    
    const content = document.createElement("div")
    
    content.classList.add("content")

    item.appendChild(content)

    const h6 = document.createElement("h6")

    h6.innerText = "Nome"

    const input = document.createElement("input")

    input.type = "text"

    content.appendChild(h6)

    content.appendChild(input)

    const content2 = document.createElement("div")
    
    content2.classList.add("content")

    item.appendChild(content2)

    const h62 = document.createElement("h6")

    h62.innerText = "Cidade"

    const input2 = document.createElement("input")

    input2.type = "text"

    content2.appendChild(h62)

    content2.appendChild(input2)

    return element;
}

function criarElemento1(element) {
    element.classList.add("form")
    
    return element;
}


function clonar() {
    
    const clonado = document.querySelector(".teste1")

    const aonde = document.querySelector(".teste1")

    const clone = clonado.cloneNode(true)

    aonde.appendChild(clone)

}
