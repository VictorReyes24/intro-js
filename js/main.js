// alert ("Hola mundo!!!");

// console.log("Este es otro mensaje..!")

var nombre="Victor Manuel";
let edad=10;
var estado = 0 ;
// edad="No quiero decirlo";
let titulo=document.getElementById('titulo')
let mensaje="Mi nombre es "+ nombre + " y mi edad es " + (edad + 12);
console.log(mensaje);
    
titulo.innerHTML= mensaje;
titulo.style.color= '#3027b0';
titulo.style.textTransform= 'UpperCase';

texto.onclick=function() {

    if (estado == 0){
        estado = 1

        titulo.innerHTML="Le diste clic";
        titulo.style.textTransform= 'LowerCase';

        oculto.innerHTML ="haz click nuevamente para volver";
    }else{
        estado = 0;

        titulo.innerHTML= mensaje;
        titulo.style.color= '#3027b0';
        titulo.style.textTransform= 'UpperCase';

        oculto.innerHTML ="";

    }
};

oculto.onclick=function() {
    estado = 0;

    titulo.innerHTML= mensaje;
    titulo.style.color= '#3027b0';
    titulo.style.textTransform= 'UpperCase';

    oculto.innerHTML ="";
};
