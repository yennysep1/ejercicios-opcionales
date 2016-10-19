

// *******EJERCIVIOS VARIOS , PARA SELECCIONAR ***************  


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

		for (var i=2; i<n-1; i++){  // tratando de encontrar un divisor, se rompe la regla
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


	for(var i=1;i<=10;i++){
		multiplo=num*i;
		resultado+= multiplo +",";  //caja que almacena el recorrido de for
		
	}
	return alert(resultado);

} multiplosDe();


// ************************* ARRAY ARRAY  ARRAY ***************



/* #10 Desarrollar una función que retorne la cantidad de digitos que tiene 
una variable entera positiva*/

function cantElementos(){
	var arreglo = ["Dará", "el", "largo", "de", "esta", "variable", 5, 6];
	var largo = arreglo.length;

	return largo;

} cantElementos();




// **************************** EJERCICIOS BASICOS ***********************



// escriba el algoritmo que pregunte por dos numeros y muestre como resultado la suma de estos

function suma(a,b){
	var resultado = a+b;
	console.log(resultado);
}


//escriba el algoritmo que pregunte por tres numeros y muestre como resultado el promedio de estos

function promedio(a,b,c){
	var resultado= (a+b+c)/3;
	console.log(resultado);
}

function venta(litros, precio){
	var galon= 3785;
	var produccion= (litros/galon);
	var ganancia= produccion*precio;

	console.log (ganancia);
}

/* Se requiere determinar el sueldo semanal de un trabajador con base en las horas que trabaja y el pago por hora que recibe*/

function sueldoSemanal(pago, horas){

	var sueldoDia = pago*horas;
	var sueldoSemana = sueldoDia*7;

	console.log(sueldoSemana);
}

/*Una modista para realizar una prenda de vestir encarga las prendas al extranjero, para cada pedido tiene que proporcionar las medidas de la tela en pulgadas, pero ellas generalmente las tienen en metro.
generar un algoritmo que determine cuantas pulgadas debe pedir, segun los metros que requiere */


function pedido (metro){
	var pulgadas = metro*39.37;

	console.log (pulgadas);
}

/*Pinturas la brocha gorda requiere determinar cuanto cobrar por trabajos de pintura. considere que se cobra por m2 */

function costo(mts2,costo){
	var valorTotal = costo*mts2;

	console.log(valorTotal)
}

/* la compañia de buses la curva loca requiere determinar el costo que tendra un boleto de un viaje sencillo, esto basado en los kilometros por recorrer y en el costo por kilometro. */

function viaje (km,costokm){
	var valorPasaje = km*costokm;

	console.log(valorPasaje);
}

/* haz un programa que funcione de la siguiente forma
-el programa nos pregunte nuestro nosmbre
-el programa nos pregunte nuestra edad
-el programa nos da como resultado nuestro nombre + cuantos dias hemos vivido  */

function diasVividos (){
	var nombre = prompt("Cual es su nombre?");
	var edad = prompt("cual es su edad");
	var resultado= edad*365;

	var respuesta = nombre + " usted ha vivido " + resultado + " dias";

	alert(respuesta);
} diasVividos();



/* Haz un programa que funcione de la siguiente forma:
el programa nos pide nuestro nombre
el programa nos pide nuestro primer apellido
el programa nos pide poblacion donde */



        function info (nombre, apellido, poblacion){

            var nombre = prompt("Ingrese su nombre");
            var apellido = prompt("Ingrese su apellido");
            var poblacion = prompt("Ingrese poblacion donde vive");
            var informacion = alert( "hola " + nombre + " "+ apellido + "\n" + "Adios habitante de " + poblacion);

        } info();


// ************* CONDICIONES****************

//#1 APROBADO O REPROBADO 

function evaluacion (nota1, nota2, nota3){
            var promedio = (nota1+nota2+nota3)/3;

            if(promedio =>6){
                console.log("El alumno aprueba");
            }else{
                console.log("El alumno no aprueba");
            }
        }

//#2 CUAL ES EL NUMERO MAS GRANDE

        function numGrande (num1,num2){
         
         if (num1>num2){
            console.log(num1 +" es mayor");
        } else if (num1===num2){
            console.log(num1 + " es igual a " + num2);
        }else {
            console.log(num2 +" es mayor");
        }

    }