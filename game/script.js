const play = document.getElementById('play')
const player1 = document.getElementById('jugador1')
const player2 = document.getElementById('jugador2')
const resultado = document.getElementById('resultado')




// Compara las opciones y determina quién gana
function random(){

}


function playGame(){

        // Genera un número aleatorio entre 0 y 2
let numeroAleatorio = Math.floor(Math.random() * 3);
    // Crea un array con las opciones de piedra, papel y tijera
let opciones = ['piedra', 'papel', 'tijera'];

// Asigna una opción aleatoria a cada jugador
let opcionJugador1 = opciones[Math.floor(Math.random() * 3)];
let opcionJugador2 = opciones[Math.floor(Math.random() * 3)];

// Muestra las opciones de cada jugador en la consola
console.log('Jugador 1 eligió ' + opcionJugador1);
console.log('Jugador 2 eligió ' + opcionJugador2);

    // Compara las opciones y determina quién gana
if (opcionJugador1 === opcionJugador2) {
    resultado.textContent = 'Empate'
  } else if ((opcionJugador1 === 'piedra' && opcionJugador2 === 'tijera') ||
             (opcionJugador1 === 'papel' && opcionJugador2 === 'piedra') ||
             (opcionJugador1 === 'tijera' && opcionJugador2 === 'papel')) {
    resultado.textContent = 'Jugador 1 Gana'
  } else {
    resultado.textContent = 'Jugador 2 Gana'
  }
  player1.textContent = opcionJugador1;
  player2.textContent = opcionJugador2;
}

