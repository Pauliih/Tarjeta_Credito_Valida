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
/*function isValidCard(option){
		do{
		var cardNum = prompt("Indique el número de su tarjeta de crédito:");
		var cardNum = parseInt(cardNum);
		var numInver=[];


		if(cardNum != "" || typeof cardNum == "number"){
			
			
		}else {
				alert("Ingrese un número de tarjeta válido");
	} while (cardNum == "" || (cardNum != "1" && cardNum != "2"));
}

//HacerALGO
isValidCard();
*/
function isValidCard(option){
	//	do{
		var cardNum = prompt("Indique el número de su tarjeta de crédito:","");
		//var cardNum = parseInt(cardNum);
		var numInv=[];
		var inv=0;
		

    if(cardNum == "" || isNaN(cardNum)){
        alert("Ingrese un número de tarjeta válido");
    }else{
        for (var i = cardNum.length - 1; i >= 0; i--) {
				inv=parseInt(cardNum.charAt(i));

				numInv.push(inv);
				console.log(numInv);
		}
    }
}

//HacerALGO
isValidCard();