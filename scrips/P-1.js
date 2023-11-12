console.log('Hola mundo en js.');
console.log('ke lo ke mamapingas.')

//Comentarios por lineas

/*
Comentarios por secciones 
*/

/*
Tipos de datos con Java Script
string: Cadena de caracteres.
boolean : True False.
null: valor nulo.
number: Cualquier numero 1234567890. 1 12 123.
object: Objeto.
*/

/*
Formas de declarar variables.
let 
vat
const
*/
let miBoolean = true
let miOtroBool = false
let miNumero = 8
let miNumero2 = 12
let miNumero3 = 258

console.log(miNumero, miNumero2, miBoolean);
let undef
console.log(undef);
let nulo = null
console.log(nulo);
 // Objeto vacio
const m1PrimerObjeto ={}
const miObjeto ={ //Algo parecido a las clases en C++ o en python, 
    unNumero: 12, //con la diferencia de ausencia de metodosos
    unString: 'Esta cadena de caracteres.',
    unaCondicion: true,
}

console.log(miObjeto.unNumero);

const arrVacio = [] //Arreglo, puede contener datos de cualquier tipo
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

console.log(arrVacio, arr);

arr.push(50, 'Ke lo ke hdp');
console.log(arr, arrVacio);

///////////Operadores matemeticos./////////////

const suma = 1+2
const resta = 5-2
const multiplicacion = 3*4
const div = 6/3
const modulo = 10%3 //residuo de una divicion.
console.log(suma, resta, multiplicacion, div, modulo);

let num1 = 5

console.log (num1);
num1++;
console.log (num1);