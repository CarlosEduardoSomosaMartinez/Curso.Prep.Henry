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
   
    let arreglo=[];
    let x=0;  
   for(const propiedad in objeto){
       arreglo[x]=[];
       arreglo[x].push(propiedad);
       arreglo[x].push(objeto[propiedad]);
       x++;
     
   }
   return arreglo
  
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let stringToArray=string.split("");
  let contador={}
  for(let x=0;x<stringToArray.length;x++){
    if(!contador.hasOwnProperty(stringToArray[x])){
      contador[stringToArray[x]]=1;
    }else{
      contador[stringToArray[x]]+=1;
    }
  }
  return contador;
      

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas=[];
  let minusculas=[];
  for(let x=0;x<s.length;x++){
      if(s[x]==s[x].toUpperCase()){
          mayusculas.push(s[x]);
      }else{
          minusculas.push(s[x]);
      }
  }
  mayusculas=[...mayusculas,...minusculas];

  return mayusculas.join("");

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  frase="";
  let arreglo=str.split(" ");
   for(let y=0;y<arreglo.length;y++){
      for(let x=arreglo[y].length-1;x>=0;x--){
          console.log(arreglo[y][x]);
          frase+=arreglo[y][x];
      }

     arreglo.length!=y+1?frase+=" ":false;

  
  }
  return frase;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString=numero.toString();
  for(let x=0;x<Math.floor(numeroString.length/2);x++){
      if(numeroString[x]!=numeroString[(numeroString.length-1)-x]){
           return"No es capicua";
      }
      
  }
  return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
   let arreglo = cadena.split("");
   for(let x=0;x<arreglo.length;x++){
      if(arreglo[x]=="a"||arreglo[x]=="b"||arreglo[x]=="c"){
         arreglo.splice(x,1);
         x--;
      }
   }
    return arreglo.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 return arr.sort((a,b)=>a.length-b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo3=[];
  let resultado=0;
  for(let x=0;x<arreglo1.length;x++){
    resultado=parseInt((arreglo2.filter((numero)=>numero==arreglo1[x])));
      isNaN(resultado)?false:arreglo3.push(resultado);
  }
  return arreglo3;
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

