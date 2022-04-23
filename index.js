var segundos = 0
var minutos  = 0
var horas = 0
var intervalo



function start(){
contador()
intervalo = setInterval( contador,1000)
}

function pause(){
    clearInterval(intervalo);
}

function stop(){
    clearInterval(intervalo);
    segundos = 0
    minutos = 0
    document.getElementById("relogio").innerText = '00:00:00'
}

function dig(digito){
if(digito < 10){
    return('0' + digito);
}else{
    return(digito)
}
}


function contador(){
segundos++
if(segundos == 60){
    
    minutos++
    segundos = 0
    if(minutos == 60){
        minutos = 0
        horas++
    }

}
document.getElementById("relogio").innerText = dig(horas) + ':' + dig(minutos)+ ':' + dig(segundos)
}