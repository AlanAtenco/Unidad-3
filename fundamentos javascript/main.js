const obtenerNombre =nombre => nombre;

const saludar = (nombre)=>{
    return `Hola ${nombre}`
}


console.log(saludar(obtenerNombre("Alan")))

const calificaciones =[100,39,20,28,30,25]

calificaciones.forEach((valor,index,arr) => {
    console.log("valor",valor,"index",index,"arr",arr)//window 
});

