let jugador1 = 'x';
let Fin = false;

// Obtener todos los cuadros del juego
const cuadros = document.querySelectorAll('.cuadro');

// Agregar un evento de clic a cada cuadro
cuadros.forEach(cuadro => {
  cuadro.addEventListener('click', () => {
    if (!Fin && !cuadro.classList.contains('ocupado')) {
      cuadro.classList.add(jugador1);
      cuadro.classList.add('ocupado');

      // Verificar si el jugador actual ganó
      if (Ganador()) {
        mostrarMensaje(`¡El jugador ${jugador1} ha ganado!`);
        Fin = true;
      } else {
        // Cambiar al siguiente jugador
        jugador1 = jugador1 === 'x' ? 'o' : 'x';
      }
    }
  });
});

function Ganador() {
  const combinaciones = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  for (const combinacion of combinaciones) {
    const [a, b, c] = combinacion;
    if (
      cuadros[a].classList.contains(jugador1) &&
      cuadros[b].classList.contains(jugador1) &&
      cuadros[c].classList.contains(jugador1)
    ) {
      // Marcar las casillas ganadoras
      cuadros[a].classList.add('ganador');
      cuadros[b].classList.add('ganador');
      cuadros[c].classList.add('ganador');
      return true;
    }
  }
  return false;
}


function mostrarMensaje(mensaje) {
  alert(mensaje);
}
