/*
2. Tarjeta de crédito válida

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y 
confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona 
el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío.

TO DO:
- Pedir num de tarjeta de credito al usuario.
- Pasar los numeros en orden inverso a un array.
- Multiplicar por 2, los números de las posiciones pares, si el resultado de ese numero 
  es mayor o igual a 10, debemos sumar los digitos de ese resultado.
- Sumar todos los digitos y nuevos digitos.
- El resultado de la suma debemos obtener el residuo de la división por 10, si es 0 es 
  una tarjeta de crédito válida (Comprobar si es una tarjeta válida).

suma módulo 10 debe ser igual a cero:
numSum % 10 =0

############################################################################################*/
function isValidCard(option){
		do{
		var respuesta = prompt("Indique el número de su tarjeta de crédito:");
		var respuesta = parseInt(respuesta);
		var numInvertidos=[];
		

		if(respuesta != ""){
			if(respuesta == "1") {
				//HacerALGO
			} else if (respuesta == "2") {
				//HacerALGO
			} else {
				alert("Ingrese un número de tarjeta válido");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

//HacerALGO
isValidCard();
