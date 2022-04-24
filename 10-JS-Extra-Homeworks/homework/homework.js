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
  var transfor = [];
  for (let muestra in objeto){
    transfor.push([muestra, objeto[muestra]]);
  }
  return transfor;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
   var devolt = {};
   for (var s = 0; s< string.length; s++){
     if(devolt.hasOwnProperty(string[s])) {
      devolt[string[s]] += 1;
     } else{
      devolt[string[s]] = 1;
     }
   }
   return devolt;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = "";
  var min = "";
  for (var t = 0; t < s.length; t++){
    if (s[t] === s[t].toUpperCase()){
       may += s[t];
    } else { min += s[t]}
  }
  return may + min;
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var resulta = "";
  var acum = "";
  var sep = str.split(" ");
  for (var s = 0; s < sep.length; s++){
    acum += sep[s];
    for (var c = acum.length - 1;c >= 0; c--){
     resulta += acum[c];
    }
     acum = "";
     if (s + 1 === sep.length){
       acum = "";
     } else{
     resulta += " ";}
  }
  return resulta;
} 
   
      
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = numero.toString();
  var cpicua = "";
  for (var s = string.length -1; s >= 0; s--){
    cpicua = cpicua += string[s];   
  }
  if (string === cpicua){
      return "Es capicua"
  } else {return "No es capicua";}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nueCadena = "";
  for (var s = 0; s < cadena.length; s++){
    if (!(cadena[s] === "a" || cadena[s] === "b" || cadena[s] === "c")){
      nueCadena += cadena[s];
    } 
  }
  return nueCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevoArray = arr.sort(function(elementoActual, elementoSiguiente){
    return elementoActual.length - elementoSiguiente.length;
  });
   
   return nuevoArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inter = [];
   for (var s = 0; s < arreglo1.length; s++){
     for (var t = 0; t < arreglo2.length; t++){
       if (arreglo1[s] === arreglo2[t]){
         inter.push(arreglo2[t]);
       }
     }
   }
   return inter;
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

