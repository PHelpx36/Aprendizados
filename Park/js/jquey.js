const btn = document.querySelector("#soma")

btn.addEventListener("click", () => somar())

function somar(){
    var v1 = window.document.getElementById('v1')
    var v2 = window.document.getElementById('v2')
    var res = window.document.getElementById('resultado')
    var n1 = Number(v1.value)
    var n2 = Number(v2.value)
    var soma = n1 + n2
    res.innerText = `A soma entre ${n1} + ${n2} é igual a ${soma}`
}

function soma() {
    let v1=parseInt($("#v1").val())
    let v2=parseInt($("#v2").val())
    let soma = v1+v2
    $("#resultado1").text("A soma entre " + v1 + " + " + v2 + " é igual a " + soma)
}

$("#somajq").click(() => {
    soma();
})

$("#write").keyup(() => {
    $("#copia").text($("#write").val())
})

$("#quadrado").on({
    click:()=>{$("#quadrado").text("Clicou!")},
    dblclick:()=>{$("#quadrado").text("Double Clique!")},
    mouseleave:()=>{$("#quadrado").text("Testando")}
})

$(".quadrado2").dblclick(() => {
    $("#quadrado").trigger("click")
})

let pmx = 0
let pmy = 0

$(document).mousemove((event) => {
    pmx=event.pageX
    pmy=event.pageY
    $("#texto1").text("Mouse X: " + pmx + "px , Mouse Y: " + pmy + "px")
    if(pmx < 10)
        
        console.log("Pos X > que 500px")
})

$(document).click((event) => {
    $("#res").text("Objeto clicado é : " + event.target.tagName)
})

$(document).on({
    click:()=>{
        $("#res1").text(event.type + ": " + event.which)
    },
    keydown:()=>{
        $("#res1").text(event.type + ": " + event.which)
        if(event.which === 13){
            alert('ENTER Pressionado!')
        }
    }
})

$("#res1").on({
    click:() => {
        $(".quadrado2").css({"display" : "none"})
    },
    mouseleave:() => {
        $(".quadrado2").css({"display" : "flex"})
    }
})

//$("#res2").find("li:last").css({"border" : "1px solid #f00"})

//$("#res2").siblings().css({"border" : "1px solid #f00"})

$("div").eq(6).css({"border" : "1px solid #aaf" , "background-color" : "#000"})

$(".ocultar").click(function(){
    $(".quadrado2").toggle()
    if($(".quadrado2").is(":visible")){
        $(".btn").text("ocultar")
        $(this).attr("class" , "btn btn-outline-primary")
    }else{
        $(".btn").text("mostrar")
        $(this).attr("class" , "btn btn-outline-warning")
    }
})

$(".teste").click(function(){
    $("#quadrado3").animate({opacity:"toggle"})
})


$(document).keydown((event) =>{
    if(event.which === 39){
        esquerda();        
    }
    if(event.which === 38){
        cima();        
    }
    if(event.which === 37){
        direita();        
    }
    if(event.which === 40){
        baixo();        
    }
})

function esquerda() {
    $("#quadrado3").delay(1000).animate({left:"400px"},{durantion:1000})
}
function cima() {
    $("#quadrado3").animate({top:"100px"},{durantion:1000})
}
function direita() {
    $("#quadrado3").animate({left:"100px"},{durantion:1000})
}
function baixo() {
    $("#quadrado3").animate({top:"500px"},{durantion:1000})
}

$("#cima").click(function(){
    $("#menu").slideToggle(0)
})

$("#add").click(()=> {
    adicionaElemento();
    verificaDisabled();
})

$(".accordion-button").click(()=> {
    verificaDisabled();
})

$("#remove").click(()=> {
    removeElemento();
    removeElemento1();
    verificaDisabled();
})

$("#if_car").click(()=> {
    Apare("#CNH", "#CNH2")
})

$("#if_car1").click(()=> {
    Desapa("#CNH", "#CNH2");
})

$("#est").click(()=> {
    Apare(".stag");
})

$("#est1").click(()=> {
    Desapa(".stag");
})

function adicionaElemento() {
    $(".register").append("<div class='testa'><div class='testa1'><div id='texto'><h6>Nome</h6><input id='v1' type='text'><h6>Idade</h6><input id='idade' type='number'></div><div id='texto'><h6>Cidade</h6><input id='v2' type='text'></div></div></div>")
    $(".testa").animate({opacity: "1"})
}

function removeElemento() {
    $(".register").find("div.testa:last").animate({opacity: "0"})
}
function removeElemento1() {
    $(".register").find("div.testa:last").remove()
}

function verificaDisabled() {
    if(document.querySelectorAll("div.testa").length === 0){
        $("#remove").addClass("disabled")
    }
    else{
        $("#remove").removeClass("disabled")
    }
}

function Apare(v1, v2){
    $(v1).fadeIn(function(){})
    $(v2).fadeIn(function(){})
}
function Desapa(v1,v2){
    $(v1).fadeOut(function(){})
    $(v2).fadeOut(function(){})
}


function valueLista() {
    var valor = $("#lista_formacao").val();

    if(valor == 3){
        $(".curso").fadeIn(function(){});
    }else{
        $(".curso").fadeOut(function(){})
    }
    return valor
}

$(".pop-up").click(()=> {
    info()
})

$(".close").click(()=> {
    apaga()
})

function info(){
    let nome = document.querySelector("#if_nome").value
    let idade = document.querySelector("#if_idade").value
    let email = document.querySelector("#if_email").value
    let tel = document.querySelector("#if_tel").value
    $(".modal-body").append("<div>Nome: "+nome+"</br>Idade: "+idade+"</br>Email: "+email+"</br>Telefone: "+tel+"</div>")
}

function apaga() {
    $(".modal-body").empty()
}

const objs = {
    nome: "Victor",
    Idade: 21,
    estagio: true,
    hobies: ["Natação", "Jogar" , "Viajar"],
    Estudos: {
        Linguas: ["Javascript", "Html" , "CSS", "C#"],
        Curso: "Engenharia da Computação"
    }
}

/* console.log(objs);
console.log(typeof objs)

//transformando para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//Converter JSON para Objeto javascript
const objData = JSON.parse(jsonData)

console.log(objData) */

function postForm(data, url) {
    console.log(data)
    console.log(url)
    $.ajax({
        method: "POST",
        url: url,
        data: data
    })
    insertTable(data)
    alert("Formulário do " + data.nome + " foi enviado com sucesso!")
}

function setGenero(elemento){
    if(elemento.checked){
        return "Masculino"
      }else{
        return "Feminino"
      }
}

function setHabilitacao(elemento) {
    if(elemento.checked){
        return "Habilitado"
      }else{
        return "Não Habilitado"
      }
}

function setFormacaoLista(v) {
    
    if(v == 3){
        return "Bacharelado"
    }else if(v == 2){
        return "Ensino Médio"
    }else if(v == 1){
        return "Ensino Fundamental"
    }else{
        
    }  
}

function setCurso(elemento){
    if($(".curso").is(":visible")){
        curso = elemento
        return curso
    }else{
        return false
    }
}

function setEstagio(elemento){
    if(elemento.checked){
        return true
      }else{
        return false
      }
}

let i = 1;
function insertTable(data) {
    
    $("#t_dados").append("<tr class='t_dados"+i+"'><th scope='row'>"+i+"</th><td class='t_nome'>"+data.nome+"</td><td class='t_idade'>"+data.idade+"</td><td class='t_email'>"+data.email+"</td><td class='t_tel'>"+data.tel+"</td><td class='t_gen'>"+data.genero+"</td><td class='t_acao'><button type='button' class='t_btn1 btn btn-danger'>Apagar</button></td></tr>")
    i++
}

//Voce parou aqui, Botão dentro da tabela não funciona...

document.querySelector(".t_btn1").addEventListener('click', () =>{
    
    console.log(find(".table"))
    deleteInfo()
})

function deleteInfo() {
    console.log($(".t_acao").parent())
    $(".t_acao").parent().remove()
    i--;
}