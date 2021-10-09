/* const tablero = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]; */

const tableroJuego = [];
const filaTablero = [1, 0, 1, 0, 0];

// let contador;

function crearTablero(arrayTablero, filas) {
  for (let i = 0; i < 7; i++) {
    arrayTablero.push(filas);
  }
  return tableroJuego;
}

console.table(crearTablero(tableroJuego, filaTablero));

function revisarLateral(arrayTablero) {
  let nuevoTablero = [];
  arrayTablero.forEach((fila) => {
    fila.forEach((celula) => {
      let contador = 0;
      const row = arrayTablero.indexOf(fila);
      const col = fila.indexOf(celula);
      const posicion = arrayTablero[row][col];

      if (col !== 0) {
        if (arrayTablero[row][col - 1] === 1) {
          contador += 1;
        }
      }

      if (col !== fila.lenght) {
        if (arrayTablero[row][col + 1] === 1) {
          contador += 1;
        }
      }

      nuevoTablero = arrayTablero.map((elemento) => {
        if (celula === 1 && contador < 2) {
          elemento[posicion] = 1;
        } else if (celula === 1 && (contador === 2 || contador === 3)) {
          elemento[posicion] = 1;
        } else if (celula === 1 && contador > 3) {
          elemento[posicion] = 0;
        } else if (celula === 0 && contador === 3) {
          elemento[posicion] = 1;
        }
        return elemento;
      });
    });
  });
  return console.table(nuevoTablero);
}
console.table(tableroJuego);
revisarLateral(tableroJuego);
/*

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

module.exports = {
  crearTablero,
};
