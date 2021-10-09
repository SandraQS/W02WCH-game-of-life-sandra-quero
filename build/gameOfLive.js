const columnas = 10;
const filas = 10;

const crearTablero = (col, row) => {
  const firstCol = new Array(col);
  for (let i = 0; i < firstCol.length; i++) {
    firstCol[i] = new Array(row);
    for (let j = 0; j < firstCol[i].length; j++) {
      firstCol[i][j] = 0;
    }
  }
  return firstCol;
};

const contarVecinos = (tablero, col, row) => {
  let contador = 0;
  if (tablero[row - 1] !== undefined) {
    if (tablero[row - 1][col - 1] === 1) {
      contador += 1;
    }
    if (tablero[row - 1][col] === 1) {
      contador += 1;
    }
    if (tablero[row - 1][col + 1] === 1) {
      contador += 1;
    }
  }

  if (tablero[row][col - 1] === 1) {
    contador += 1;
  }
  if (tablero[row][col + 1] === 1) {
    contador += 1;
  }

  if (tablero[row + 1] !== undefined) {
    if (tablero[row + 1][col - 1] === 1) {
      contador += 1;
    }
    if (tablero[row + 1][col] === 1) {
      contador += 1;
    }
    if (tablero[row + 1][col + 1] === 1) {
      contador += 1;
    }
  }
  return contador;
};

const nuevoTablero = (tablero) => {
  const primerTablero = tablero;
  const tableroNuero = crearTablero(columnas, filas);

  for (let i = 0; i < primerTablero.length; i++) {
    for (let j = 0; j < primerTablero[i].length; j++) {
      const vecinos = contarVecinos(primerTablero, j, i);

      if (primerTablero[i][j] === 1 && vecinos < 2) {
        tableroNuero[i][j] = 0;
      }
      if (primerTablero[i][j] === 1 && (vecinos === 2 || vecinos === 3)) {
        tableroNuero[i][j] = 1;
      }
      if (primerTablero[i][j] === 1 && vecinos > 3) {
        tableroNuero[i][j] = 0;
      }
      if (primerTablero[i][j] === 0 && vecinos === 3) {
        tableroNuero[i][j] = 1;
      }
    }
  }
  return tableroNuero;
};

let tableroFinal = crearTablero(columnas, filas);

tableroFinal[1][2] = 1;
tableroFinal[2][2] = 1;
tableroFinal[3][2] = 1;

setInterval(() => {
  tableroFinal = nuevoTablero(tableroFinal);
  console.table(tableroFinal);
}, 1000);
