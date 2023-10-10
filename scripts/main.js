/*Alejandro Ruiz Prieto
https://github.com/Alesso-ai/simulacro_AreayPerimetro.git
*/ 



document.addEventListener("DOMContentLoaded", function(){

    const calcular=document.getElementById("calcular");
    const area=document.getElementById("area");
    const perimetro=document.getElementById("perimetro");

    calcular.addEventListener("click", function(){

    const longitud = parseFloat(document.getElementById("longitud").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    
    
   if(!isNaN(longitud) && !isNaN(ancho)){
    area.textContent = longitud*ancho;
    area.textContent = "Tu area es: " +  area.textContent;
    
   }else{
    area.textContent = "Error, introduzca numeros para calcular";
   }

   if(!isNaN(longitud) && !isNaN(ancho)){
    perimetro.textContent = 2 * (longitud + ancho);
    perimetro.textContent = "Tu perimetro es: " +  perimetro.textContent;

   }else{
    perimetro.textContent = "Error, introduzca numeros para calcular";

   }


    });

});