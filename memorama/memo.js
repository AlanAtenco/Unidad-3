let selecciones = [];
let contador = 0;

Tablero()

function cargarImagenes() {
    imagenes = [
        '<img src="./img/goku-1.jpeg">',
        '<img src="./img/goku-2.jpg">',
        '<img src="./img/goku-3.jpeg">',
        '<img src="./img/goku-4.jpg">',
        '<img src="./img/goku-5.jpg">',
        '<img src="./img/goku-6.jpg">',
        '<img src="./img/goku-7.png">',
        '<img src="./img/goku-8.jpeg">',
        '<img src="./img/goku-9.jpg">',
        '<img src="./img/goku-10.jpg">', 
    ]
}

function Tablero() {
    cargarImagenes()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 20; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${imagenes[0]}
                </div>
                <div class="cara superior">
                   <img src="./img/esfera.png">
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            imagenes.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
    
}

function seleccionarTarjeta(i) {
    
    let tarjeta = document.getElementById("tarjeta" + i)
   
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)  

    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []   
    }
}


const incrementarNumero = () => {
    contador++;
    document.getElementById("numero").textContent = contador;
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) { 
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            incrementarNumero(tarjeta2)
            if (contador === 10){
                mostrarMensajeVictoria();
            }
        }
    }, 1000);
  
}
function mostrarMensajeVictoria() {
    const mensajeVictoria = document.getElementById("mensajeVictoria");
    mensajeVictoria.innerHTML = "¡Has Ganado! Todas las tarjetas han sido volteadas";
}
