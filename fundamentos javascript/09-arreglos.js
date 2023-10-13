let arreglo=[100,85,45,76];
let arregloDiferentesTipos=["hola",10,true,[1,2,3],function getnombre(){return "Alan"}];

let arregloNumeros=new Array;
let arregloLetras = new Array("a","b","c");


console.log("arreglo",arreglo)
console.log("arregloDiferentesTipos",arregloDiferentesTipos)
console.log("arregloNumeros",arregloNumeros)
console.log("arregloLetras",arregloLetras)

console.log(arregloDiferentesTipos[2])//true
console.log(arregloDiferentesTipos[4]())//alan
console.log(arregloDiferentesTipos[3][1])//2

arreglo.push(90);//agregamos elementos al arreglo
console.log("arreglo",arreglo)

arreglo.unshift(0);//agrega un valor al inicio del arreglo
console.log("arreglo",arreglo)

arreglo.pop();//quita el ultimo elemento del arreglo
console.log("arreglo",arreglo)

arreglo.shift();//quita el primer elemento de un arreglo
console.log("arreglo",arreglo)

let eliminadoFinal =arreglo.pop();
console.log("arreglo",arreglo)

let elementoinicio=arreglo.shift();
console.log("arreglo",arreglo)

console.log(elementoFinal,elementoinicio)

// let arregloLetrasCopia=arregloLetras

// let arregloLetrasCopia2=arregloLetras.slice();

// let arregloLetrasCopia3=[...arregloLetras];
// arregloLetrasCopia3.pop();
// console.log(arregloLetrasCopia3,arregloLetras)

let arreglo2=[100,85,45,76];
console.table(arreglo2);
