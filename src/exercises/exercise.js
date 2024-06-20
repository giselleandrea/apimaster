/*  EJERCICIO 2

    Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
    su función.

    function f(x, y, z) {
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
    }
*/ 

function mathOperation(num1, num2, num3) {
    let sum = num1 + num2;
    let product = sum * num3;
    let sin = Math.sin(product);
    return sin;
};


console.log("*** Ejemplos Ejercicio 2 *** ");

let ejemplo1 = mathOperation(2, 5, 3);
console.log(ejemplo1);

let ejemplo2 = mathOperation(6, 8, 10);
console.log(ejemplo2);


/* EJERCICIO 3
    Escribe una función que tome un número entero como entrada y devuelva un array con
    todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
    número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].
*/

function oddNumbers(num) {
    let listOdd = [];
    
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            listOdd.push(i);      
        }
    }
    return listOdd;
};

console.log("*** Ejemplos Ejercicio 3 *** ");

let ejemplo3 = oddNumbers(9);
console.log(ejemplo3);

let ejemplo4 = oddNumbers(20);
console.log(ejemplo4);