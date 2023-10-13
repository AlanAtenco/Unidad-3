function despedir(nombre) {
    return `adios ${nombre}`
}
console.log(despedir("Alan"))

let funcionAlmacenada=function saludar(nombre){
    return `Hola ${nombre}`
}
console.log(funcionAlmacenada("Alan"))

let funcionAnonimaAlmacenada=function saludar(nombre){
    return `Hola ${nombre}`
}
console.log(funcionAnonimaAlmacenada())

console.log(function () {return "ejecucion"}());//funcion anonima sin variable

let funcionflecha = nom => `hola ${nombre}`
console.log()