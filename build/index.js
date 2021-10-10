const botonEmpezar = document.getElementById("empezar");
const botonResetear = document.getElementById("resetear");

const columnas = 30;
const filas = 65;

const contenedorTablero = document.querySelector(
  ".contenedor-principal__tablero"
);
const borrarTablero = () => {
  contenedorTablero.innerHTML = "";
};

const crearTablero = (col, row) => {
  const primeraTabla = new Array(col);
  const tablero = document.querySelector(".contenedor-principal__tablero");

  for (let i = 0; i < primeraTabla.length; i++) {
    primeraTabla[i] = new Array(row);
    let filasDivs = primeraTabla[i];
    filasDivs = document.createElement("div");
    filasDivs.classList.add("contenedor-principal__filas", i);
    for (let j = 0; j < primeraTabla[i].length; j++) {
      const celulas = document.createElement("div");
      primeraTabla[i][j] = celulas;
      celulas.classList.add("contenedor-principal__celula", `${i}-${j}`);
      celulas.addEventListener("click", (celda) => eventoClick(celda));
      filasDivs.appendChild(celulas);
    }
    tablero.appendChild(filasDivs);
  }
  return primeraTabla;
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
  borrarTablero();
  const tableroNuero = crearTablero(columnas, filas);

  for (let i = 0; i < primerTablero.length; i++) {
    for (let j = 0; j < primerTablero[i].length; j++) {
      const vecinos = contarVecinos(primerTablero, j, i);

      if (primerTablero[i][j] === 1) {
        if (vecinos === 2 || vecinos === 3) {
          tableroNuero[i][j].classList.add("viva");
          tableroNuero[i][j] = 1;
        } else {
          tableroNuero[i][j].classList.remove("viva");
          tableroNuero[i][j] = 0;
        }
      } else if (primerTablero[i][j] === 0) {
        if (vecinos === 3) {
          tableroNuero[i][j].classList.add("viva");
          tableroNuero[i][j] = 1;
        } else {
          tableroNuero[i][j].classList.remove("viva");
          tableroNuero[i][j] = 0;
        }
      }
    }
  }
  return tableroNuero;
};

let tableroFinal = crearTablero(columnas, filas);

for (let i = 0; i < tableroFinal.length; i++) {
  for (let j = 0; j < tableroFinal[i].length; j++) {
    tableroFinal[i][j] = 0;
  }
}

const eventoClick = (celda) => {
  const celdaClicada = celda.target;
  const posicion = celda.target.className.split(" ")[1].split("-");
  const col = +posicion[0];
  const row = +posicion[1];
  if (celdaClicada.classList.contains("viva")) {
    celdaClicada.classList.remove("viva");
    tableroFinal[col][row] = 0;
  } else {
    celdaClicada.classList.add("viva");
    tableroFinal[col][row] = 1;
  }
};

botonEmpezar.addEventListener("click", () => {
  setInterval(() => {
    tableroFinal = nuevoTablero(tableroFinal);
  }, 300);
});

botonResetear.addEventListener("click", () => {
  location.reload();
});

module.exports = {
  crearTablero,
  contarVecinos,
  nuevoTablero,
};
