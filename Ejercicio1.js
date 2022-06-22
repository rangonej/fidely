
const message = 'Hello WorlD' 
document.querySelector('#header').innerHTML = message

function contarMayusculas(cadena) {
 var contar = 0;

 var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
   for (var i = 0; i < mayusculas.length; i++) {
     for (var x = 0; x < cadena.length; x++) {
       if(cadena[x]==mayusculas[i]){
         contar+=1;
       }
   }
 }

 return contar;
}

console.log(contarMayusculas(message))
