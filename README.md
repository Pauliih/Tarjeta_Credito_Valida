#Mi código

Este código está compuesto por una función llamada isValidCard()
Se pide el número de tarjeta de crédito al usuario, por medio de un prompt
Mientras el número de tarjeta ingresado esté vacío o tenga letras, seguir preguntando, hasta que ingrese una cadena de números.
Creo un array o matríz vacío para meter los números a la inversa.

Itero el string ingresado de atrás hacia delante al mismo tiempo que voy convirtiendo el tipo de dato string a number y los voy ingresando uno a uno a numInv.
Multiplico por dos, los números que se encuentran en las posiciones pares de la matriz (numInv), si el resultado de ese numero es mayor o igual a 10, debemos sumar los digitos de ese resultado y modificar el valor en su misma posición dentro de la matriz. Sino es mayor o igual a 10, se modifica directamente el valor en el array. 
Luego se suman todos los valores dentro del array, si el módulo de 10 del valor de la suma es 0, es una tarjeta de crédito válida, si da un numero distinto de 0, no es válida.

![##Diagrama de Flujo](https://github.com/Pauliih/Tarjeta_Credito_Valida/blob/master/Diagrama%20flujo%20CreditCard.png "Diagrama de Flujo de tarjeta de crédito")
####Este archivo es la versión `0.0.1`
@author Paula Campos