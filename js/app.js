let textoUno = document.querySelector(".texto1");
let textoDos = document.querySelector(".texto2");


function validar(){
    let textoEscrito = document.querySelector(".texto1").value;
    let prohibido = ["á","é","í","ó","ú","ý","Á","É","Í"
                    ,"Ó","Ú","Ý","A","B","C","D","E","F","G",
                    "H","I","J","K","L","M","N","Ñ","O","P","Q","R","S"
                    ,"T","U","V","W","X","Y","Z"];

    let valor = true
    for(let i = 0; i < prohibido.length; i++){
        console.log(prohibido[i])
        if( textoEscrito.includes(prohibido[i])){
            alert("No se permiten letras Mayusculas y acentos");
           valor = false;
        }
        }
        console.log(valor);
      return valor;
      
    }
    
   




function btEncriptar(){
    if(textoUno.value == ""){
        alert("El campo esta vacio");
    }
   else if(validar() == true){
        let encriptarTexto = encriptar(textoUno.value);
        textoDos.value = encriptarTexto;
        textoDos.style.backgroundImage = "none"
        textoUno.value = "";
        console.log(encriptarTexto);

    }
   
}

 

function btDesencriptar(){

let desencriptarTexto = desencriptar(textoUno.value);
textoUno.value = desencriptarTexto;



}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(textoSecreto){
    let llavesDeEncriptacion = [["e", "enter" ],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    

    for(let i = 0; i < llavesDeEncriptacion.length; i++)
    if(textoSecreto.includes(llavesDeEncriptacion[i][0])){
        textoSecreto = textoSecreto.replaceAll(llavesDeEncriptacion[i][0], llavesDeEncriptacion[i][1]);
    }
    console.log(textoSecreto);
 return textoSecreto;
}

function  desencriptar(textoVisible){
    let llavesDeEncriptacion = [["e", "enter" ],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    

    for(let i = 0; i < llavesDeEncriptacion.length; i++)
    if(textoVisible.includes(llavesDeEncriptacion[i][1])){
        textoVisible = textoVisible.replaceAll(llavesDeEncriptacion[i][1], llavesDeEncriptacion[i][0]);
    }
    
 return textoVisible;
}

function Copiar(){
if(textoDos.value == ""){
    alert("Aun no hay texto que copiar")
}
else{
    textoDos.select();
    navigator.clipboard.writeText(textoDos.value);
    textoDos.value = ""
 alert("Texto copiado");
}

}