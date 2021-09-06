const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    alert("Cantidad: "+cantidad.value+"\n"+"Precio: "+precio.value);
    //alert("Precio: "+ precio.value);
});