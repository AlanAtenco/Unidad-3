const persona={
    nombre: "Alan",
    edad: 29,
    sexo: "h",
    casado:true,
    telefonos: [5547012414,5634521517],
    saludar: function saludar() {return "hola"}
}


console.log(persona.saludar())
console.log(persona.nombre)
console.log(persona.casado)

persona.apellidos="Atenco Beltran"
console.log(persona)

delete persona.saludar
console.log(persona)