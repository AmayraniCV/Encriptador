
const botonCopiar = document.querySelector(".copiar");
const textArea = document.querySelector(".textoizquierdo");
const mensaje = document.querySelector(".textoderecho");
const popEncriptado =document.querySelector(".popupEncriptado");
const popCopiado = document.querySelector(".popupCopiado");
const popOverlay = document.querySelector(".overlay");


function botonEncriptar(){  
    const texto = encriptar(textArea.value);
    mensaje.value = texto;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
    botonCopiar.style.visibility = "visible";
    popOverlay.style.visibility ="visible";
    popEncriptado.style.visibility = "visible";      
  
}

function limpiarPantalla(){
    popOverlay.style.visibility = "hidden";
    popEncriptado.style.visibility = "hidden";
    popCopiado.style.visibility = "hidden";
}

function botonDesencriptar(){
    const texto = desencriptar(textArea.value);
    mensaje.value = texto;
    textArea.value = "";
}

function copiarTexto(){
    let texto = document.querySelector(".textoderecho");
    texto.select();
    document.execCommand("copy");
    popOverlay.style.visibility ="visible";
    popCopiado.style.visibility = "visible";

      
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
  
        for(let i = 0; i < matrizCodigo.length; i++){

            if(stringEncriptada.includes(matrizCodigo[i][0])){

                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptada; 

}   

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function validarTexto(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNñÑoOpPqQrRsStTuUvVwWxXyYzZ";
    especiales = [0,8,10,13,32];
    tecla_especial = false;

    for(let i in especiales){
        if(key == especiales [i]){
            tecla_especial = true;
            

        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){

        e.preventDefault();

    }  
}
