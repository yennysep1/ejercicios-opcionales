

// #1 Elaborar una función a la  cual le enviaremos tres enteros y muestra  el menos


function numeroMenor(a,b,c){
	var numero = Math.min(a,b,c);

	return numero;

}

/* #2 Escribir el codigo de una funcion a la que se pasa como parametro un numero entero 
y devuelve como resultado un cadena de texto que indica si el numero es par o impar 
mostrar por pantalla el resultado devuelto por la funcion*/

function esPar (n){
	var cadena ="";

	if (n%2===0){
		alert ("Es par");

	} else {
		alert ("Es impar");
		
	}
}

/* #3 Realizar una función a la cual le envie tres enteros y los muestre ordenados
de menor  a mayor */

function menorMayor (num1,num2,num3){

var num = [num1,num2,num3];
var ordenados = num.sort(function (a,b) {
    return a - b;
});
 	console.log(ordenados);
} 


/* #4 Definir una función que muestre información sobre una cadena de texto  
que se le pasa como argumento. A partir de la cadena que se le pasa, la función 
determina si esa cadena esta formada sólo por mayusculas , sólo por minusculas o 
por mezcla de ambas  */

function minusculaMayuscula (cadena){
	 var resultado ="el texto " + cadena + " ";

	 if (cadena === cadena.toUpperCase()){
	 	resultado += "son solo mayusculas";
	 }else if (cadena === cadena.toLowerCase()){
	 	resultado += " son solo minusculas"
	 }else {
	 	resultado += "es ambas"
	 }
	 return resultado; 
}

// #6 realizar un programa que te de la opcion de la operacion matematica que quieres realizar por medio de funciones.






// #7 Realizar un programa que calcule el cuadrado de la suma de dos numeros

function sumaCuadrado (a,b){
	var resultado = (a+b);
	var cuadrado = resultado * resultado;

	return cuadrado;
} 

// #8 realizar un programa que por medio de una funcion nos indique si el numero que el usuario ingresa es primo o no.

function esPrimo(){
	var n= parseInt(prompt("ingrese un numero"));
	

	if (n<=1){
		alert("Número invalido ");

	} else if (n===2){
		alert("Es número primo ");
	
	} else if (n>=3){
		var esPrimo = true; // asume que es un primo

		for (i=2; i<n-1; i++){  // tratando de encontrar un divisor, se rompe la regla
			if(n%i===0){
		 		esPrimo = false;
		 		break;
			}
		}

		if(esPrimo) {
			alert("es primo");
		} else {
			alert("no es primo")
		}
	}
}

esPrimo();


/* #9 programa que calcula los 10 primeros multiplos del numero que queramos, 
utilizando una funcion que retorna parametro*/


function multiplosDe(num){
	var num=parseInt(prompt("¿Múltiplos de qué número?",""));
	var resultado="";
	var multiplo;


	for(i=1;i<=10;i++){
		multiplo=num*i;
		resultado+= multiplo +",";  //caja que almacena el recorrido de for
		
	}
	return alert(resultado);

} multiplosDe();


// ARRAY
// ARRAY
// ARRAY


/* #10 Desarrollar una función que retorne la cantidad de digitos que tiene 
una variable entera positiva*/

function cantElementos(){
	var arreglo = ["Dará", "el", "largo", "de", "esta", "variable", 5, 6];
	var largo = arreglo.length;

	return largo;

} cantElementos();


