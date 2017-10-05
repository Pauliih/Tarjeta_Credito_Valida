#Mi código

Este código está compuesto por una función llamada isValidCard()
Se pide el número de tarjeta de crédito al usuario, por medio de un prompt
Se valida que el usuario no pueda ingresar un campo vacío ni que contenga letras.


 Pedir num de tarjeta de credito al usuario. 			:)
- Pasar los numeros en orden inverso a un array.		:)
- Multiplicar por 2, los números de las posiciones pares, si el resultado de ese numero 
  es mayor o igual a 10, debemos sumar los digitos de ese resultado.	:)
- Sumar todos los digitos y nuevos digitos.  			:)
- El resultado de la suma debemos obtener el residuo de la división por 10, si es 0 es 
  una tarjeta de crédito válida (Comprobar si es una tarjeta válida).	:)

*suma módulo 10 debe ser igual a cero:
 numSum % 10 =0
 	
####Este archivo es la versión `0.0.1`
@author Paula Campos


function isValidCard(option){

 	do{	
 		var cardNum = prompt("Indique el número de su tarjeta de crédito:","");

 	}while(cardNum === "" || cardNum === null  ||  cardNum === " " || isNaN(cardNum));

		var numInv=[];//Array para meter los numeros a la inversa
	/*if(cardNum == ""){
		alert("Ingrese un número de tarjeta válido");
	}else{ //si no se cumple la condicion anterior*/
	        for (var i = cardNum.length - 1; i >= 0; i--){ //recorre el string ingresado de atrás hacia delante
					var inv=parseInt(cardNum.charAt(i));//Convierte cada string a number
					numInv.push(inv); //va ingresando cada número al array
				}

			for (var i = 1; i < numInv.length; i+=2) { //Accede a los numeros en posiciones pares
				inPair=numInv[i]*2; //los multiplico por 2
				if(inPair>=10){ //si son mayores o iguales que 10, sumo sus digitos
					num1=inPair%10;
					num2=parseInt(inPair/10);
					inPair=num1+num2;
					numInv[i]=inPair; //Modifico el número en su misma posición        		
				}
				numInv[i]=inPair;//Modifico el número en su misma posición 
			}
			
			var sumArray=0;
				for (var i = 0; i < numInv.length; i++) { //sumar todos los elementos de  un array
					sumArray+=numInv[i];
				}
			if(sumArray%10==0){ //Si el resto de la suma es 0, la tarjeta es válida
				return alert("Tu tarjeta de crédito es válida! :)");
			}
			return alert("Tu tarjeta de crédito NO es válida!! :'c");
		// } cierre del else
	}

	isValidCard();

