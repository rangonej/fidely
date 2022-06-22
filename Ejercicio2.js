
var arrayPrimero = [1,2,3,4,5,7]
var arraySegundo = arrayPrimero.slice();

  for (var x = 0; x < arraySegundo.length; x++) {
       arraySegundo[x]=arraySegundo[x]+1;
   }

console.log(arraySegundo)
