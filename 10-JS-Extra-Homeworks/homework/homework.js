// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí


 const result = Object.entries(objeto);



 return result

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

 // var count = {};
 // string.split('').forEach(function(s) {
 //    count[s] ? count[s]++ : count[s] = 1;
 // });
//
 // console.log(count);
 // return count;


 var freq = {};
 for (var i=0; i<string.length;i++) {
     var character = string.charAt(i);
  
          
     if (freq[character]) {
        freq[character]++;
     } else {
        freq[character] = 1;
     }
 }

 return freq;



}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí


     var d = s.split('');
  const result = d.sort((a, b) => /[A-Z]/.test(a) ? /[A-Z]/.test(b) ? 0 : -1 : 0)
  .join(''); 
 return result;

  


}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  suma = []
    var m = str.split(' ');
     for(var i = 0; i < m.length; i++) {
        var v = m[i].split('')
        var a = v.reverse();
       // console.log(a);
        var b = a.join("")
      suma.push(b)
   // console.log(b)
  }
   
  // console.log();
   var z = suma.join(" ");
   
  // console.log(z);
   return z;

 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

      var str = numero.toString(); 

  var a = str.slice(0,1);
    var b = str.slice(3);
    var c = str.slice(4);
 //   console.log(a);
 //   console.log(b);
 //   console.log(c);

if (a === b || a === c){

return "Es capicua";

} else {

return "No es capicua"; 


}



}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí


  var m = cadena.split('');
  console.log(m);  
  suma = []
  for(var i = 0; i < m.length; i++) {
    console.log(m[i])
    if (m[i]==="a" || m[i]==="b" || m[i]==="c" ){

    } else {
     suma.push(m[i])
     console.log(suma)
    }   
    }

    return suma.join("") 
}
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

 console.log(arr);
  
  
 let lowestToHighest = arr.sort((a, b) => a.length - b.length);

return lowestToHighest;
  //suma = []
 

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  
  
  var duplicates = arreglo1.filter((val)=>{
    
    var e = arreglo2.indexOf(val) !== -1;
    console.log(e)
  return e
});


return duplicates;


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

