const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado=document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let res= precioTotal(cantidad.value,precio.value);
    let valorimpuesto = ImpFORstate(res,estado.value);
    let valordescuento=Descuento(res+valorimpuesto);
    //alert("Descueto: "+valordescuento);
    //alert("Codigo de estado: "+estado.value+"\n"+"Valor Impuesto: "+valorimpuesto);
    //alert("Cantidad: "+cantidad.value+"\n"+"Precio: "+precio.value+"\n"+"PrecioTotal: "+res);
    document.getElementById('cantidad').innerHTML = cantidad.value;
    document.getElementById('precio').innerHTML = precio.value;
    document.getElementById('impuesto').innerHTML = valorimpuesto;
    document.getElementById('descuento').innerHTML=valordescuento
    document.getElementById('total').innerHTML = res+valorimpuesto-valordescuento;
    
});

function precioTotal(cantidad,precio){
    let res=cantidad*precio;
    return res;
}

function ImpFORstate(valorcompra, valueState) {
    let valorImpuestos=0;
    let res;
    //let res = precioTotal(cantidad.value, precio.value);
    switch (valueState) {
        case 'UT':
            valorImpuestos = 0.0665;
            break;
        case 'NV':
            valorImpuestos = 0.08;
            break;
        case 'TX':
            valorImpuestos = 0.0625;
            break;
        case 'AL':
            valorImpuestos = 0.04;
            break;
        case 'CA':
            valorImpuestos = 0.0825;
            break;
        default:
            alert("No existe");
    }
    res = valorcompra * valorImpuestos;
    return res;
}

function Descuento(valorcompra){
    let valorDescuento=0;
    let res;
    if(valorcompra>30000){
        valorDescuento=0.15;
    }else{
        if(valorcompra>10000){
            valorDescuento=0.1;
        }else{
            if(valorcompra>7000){
                valorDescuento=0.07;
            }else{
                if(valorcompra>3000){
                    valorDescuento=0.05;
                }else{
                    if(valorcompra>1000)
                    {
                        valorDescuento=0.03
                    }
                }
            }
        }
    }
    return res = valorcompra*valorDescuento;
}