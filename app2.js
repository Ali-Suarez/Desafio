const textArea = document.querySelector(".textoUsuario");
const mensaje = document.querySelector(".result");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";


}


function encriptar(stringEncriptada){
   let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i ++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    
    }

    return stringEncriptada;

}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    


}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();
 
     for(let i = 0; i < matrizCodigo.length; i ++){
         if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
 
         }
 
     
     }
 
     return stringDesencriptada;
 
    }

    async function copiarTexto() {
        try {
          await navigator.clipboard.writeText(mensaje.value);
          alert("El texto se ha copiado correctamente");
          textArea.focus();
        } catch (error) {
            console.error(`Ha ocurrido un error al copiar al portapapeles: ${error}`);
          }
    }