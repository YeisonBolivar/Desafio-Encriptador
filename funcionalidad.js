var vocales = ["e","i","a","o","u"];
var sustitutos = ["enter","imes","ai","ober","ufat"];
const $content = contenido('exit-text');
const $btn = contenido('copy');
const $encriptar = contenido('encriptar');
const $desencriptar = contenido('desencriptar');
const $muñeco = contenido('muñeco');
const $mensajeSalida = contenido('mensaje-salida');
const letras = /^[ a-z0-9.,;:()¡!¿?""]*$/;


function contenido(id){
    return document.getElementById(id);
}

$btn.addEventListener('click',e => {
    $content.select();
    document.execCommand('copy');
});

$encriptar.addEventListener('click', e => {
    
    validarMayuscula();

    if($content.value != ""){
        aparecerMensaje();
    }else{
        desaparecerMensaje();
    }
});

function encriptar(){
    var mensaje = contenido('input-text').value;
    for(i=0;i<vocales.length;i++){
        var encritado = mensaje.split(vocales[i]).join(sustitutos[i]);
        mensaje = encritado;
    }
    contenido('exit-text').value = encritado;
}

$desencriptar.addEventListener('click', e=> {
    desencriptar();
    if($content.value != ""){
        aparecerMensaje();
    }else{
        desaparecerMensaje();
    }
});

function aparecerMensaje(){
    $content.style.display = "block";
    $btn.style.display = "block";
    $muñeco.style.display = "none";
    $mensajeSalida.style.display = "none";
}

function desaparecerMensaje(){
    $content.style.display = "none";
    $btn.style.display = "none";
    $muñeco.style.display = "block";
    $mensajeSalida.style.display = "block";
}



function desencriptar(){
    var mensaje = contenido('input-text').value;
    for(i=0;i<sustitutos.length;i++){
        var encritado = mensaje.split(sustitutos[i]).join(vocales[i]);
        mensaje = encritado;
    }
    contenido('exit-text').value = encritado;
}

function validarMayuscula(){
    if((!letras.test(contenido('input-text').value) && contenido('input-text').value.length != 0) ){
        alert("sin mayusculas y sin acénto");
    }else{
        encriptar();
    }
}


