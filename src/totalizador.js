const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let res= precioTotal(cantidad.value,precio.value)
    alert("Cantidad: "+cantidad.value+"\n"+"Precio: "+precio.value+"\n"+"PrecioTotal: "+res);
});

function precioTotal(cantidad,precio){
    let res=cantidad*precio;
    return res;
}