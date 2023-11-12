function operacion(valor){
    document.getElementById('resultado').value += valor;
}

function resultados(){
    var opera = document.getElementById('resultado').value;
    if(opera == 0){
        document.getElementById('resultado').value="Sin operacion";

    }else{
        document.getElementById('resultado').value = eval(opera);

    }
}

function reset(){
    document.getElementById('resultado').value=" ";
}