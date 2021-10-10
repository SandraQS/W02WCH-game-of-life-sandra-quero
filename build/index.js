const tableroPequeño = document.getElementById("pequeño");
const tableroMedio = document.getElementById("medio");
const tablerGrande = document.getElementById("grande");
const botonEmpezar = document.getElementById("empezar");
const botonResetear = document.getElementById("Resetear");
let columnas;
let filas;

const crearTablero = (col, row) => {
  const firstCol = new Array(col);
  for (let i = 0; i < firstCol.length; i++) {
    firstCol[i] = new Array(row);
    for (let j = 0; j < firstCol[i].length; j++) {
      firstCol[i][j] = 0;
    }
  }
  return console.table(firstCol);
};
tableroPequeño.addEventListener("click", () => {
  columnas = 10;
  filas = 10;
  document.body.style.backgroundColor = "#0000FF";
  crearTablero(columnas, filas);
});

tableroMedio.addEventListener("click", () => {
  columnas = 20;
  filas = 20;
  document.body.style.backgroundColor = "#000";
  crearTablero(columnas, filas);
});

tablerGrande.addEventListener("click", () => {
  columnas = 30;
  filas = 30;
  document.body.style.backgroundColor = "#00F";
  crearTablero(columnas, filas);
});

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

const tableroFinal = crearTablero(columnas, filas);

tableroFinal[1][2] = 1;
tableroFinal[2][2] = 1;
tableroFinal[3][2] = 1;

// setInterval(() => {
//   tableroFinal = nuevoTablero(tableroFinal);
//   console.table(tableroFinal);
// }, 1000);

module.exports = {
  crearTablero,
  contarVecinos,
  nuevoTablero,
};
