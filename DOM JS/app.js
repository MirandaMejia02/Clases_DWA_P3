const btnAumentar = document.querySelector(".btn-info");
const btnDisminuir = document.querySelector(".btn-danger");
const span = document.getElementById("span");

//crear un contador 
let contador = 0;

btnAumentar.addEventListener("click",() => {
    console.log("me diste click, asi que creceré");
    // span.textContent = 1;
    contador++;
    span.textContent = contador;

});
//Reto personal de tarea 
btnDisminuir.addEventListener("click",()=> {
    console.log("me diste click asi que voy pa atras");
    contador --;
    span.textContent= contador;
});