/* const tablero = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]; */
const tableroJuego = [];
const filaTablero = [0, 0, 0, 0, 0, 0, 0];

function crearTablero(arrayTablero, filas) {
  for (let i = 0; i < 7; i++) {
    arrayTablero.push(filas);
  }
  return tableroJuego;
}

console.table(crearTablero(tableroJuego, filaTablero));


function revisarLateral(){
  
}

for (let i = 0; i < tableroJuego.length; i++) {
  for (let j = 0; j < tableroJuego.length; j++) {
    if ((tableroJuego[i][j] === 1) && (tableroJuego[i][j + 1] === 1) && (tableroJuego[i][j - 1] === 1)  {
      console.log('hola')
    }
  }
}

/* 
let col;
let row;
console.table(tablero);
let contador = 0;

function vecinosLaterales(arrayTablero, posicionCol, posicionRow) {
  posicionCol = 2;
  const posicionInicialCol = posicionCol;
  const posicion = arrayTablero[posicionRow][posicionCol];
  if (posicion === 1) {
    col -= 1;
    if (posicion === 1) {
      contador += 1;
      col = posicionInicialCol;
    } else {
      col = posicionInicialCol;
      col = +1;
    }
    if (posicion === 1) {
      contador += 1;
    }

    console.log(contador);
  }
}
vecinosLaterales(tablero, col, row);

function vecinosVerticales(arrayTablero, posicionCol, posicionRow) {
  posicionRow = 1;
  const posicionInicialRow = posicionRow;
  const posicion = arrayTablero[posicionRow][posicionCol];
  if (posicion === 1) {
    row -= 1;
    if (posicion === 1) {
      contador += 1;
      row = posicionInicialRow;
    } else {
      row = posicionInicialRow;
      row = +1;
    }
    if (posicion === 1) {
      contador += 1;
    }

    console.log(contador);
  }
}
vecinosVerticales(tablero, col, row);
 */
