let textoDigitado = document.querySelector(".tarefa");
let button_add = document.querySelector(".botao-add");
let ul_listaTarefa = document.querySelector(".lista");

button_add.addEventListener('click',()=>{
    if(textoDigitado.value){
        addTarefa(textoDigitado.value);
    }else{
        alert('Digite alguma tarefa!');
    }
})
function addTarefa(tarefa){
    ul_listaTarefa.innerHTML += `<li>${tarefa}<button>x</button></li>`;
    textoDigitado.value = "";
}
ul_listaTarefa.addEventListener('click',(event)=> {
    if(event.target.tagName=='BUTTON'){
        removerItens(event.target.parentNode)

    }
})
function removerItens(tarefa){
    tarefa.remove();
}
document.addEventListener('keydown', function(event) {
 if (event.keyCode === 13) {
    console.log('Tecla Enter pressionada');
    // Aqui você pode adicionar o código que deve ser executado quando a tecla Enter é pressionada
    if(textoDigitado.value){
        addTarefa(textoDigitado.value);
    }else{
        alert('Digite alguma tarefa!');
    }
}
 
});