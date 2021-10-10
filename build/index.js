const tableroPequeño = document.getElementById("pequeño");
const tableroMedio = document.getElementById("medio");
const tableroGrande = document.getElementById("grande");
const botonEmpezar = document.getElementById("empezar");
const botonResetear = document.getElementById("Resetear");

// function crearFilasDivs() {
//   const div = document.createElement("div");
//   div.className = "contenedor-principal__filas";

//   document.getElementById("contenedor-tablero").appendChild(div);
// }
// function alClicar(celula) {
//   debugger;
//   console.log("hola");
//   celula.style.backgroundImage = "none";
// }

// function crearCelulas() {
//   const celula = document.createElement("div");
//   celula.className = "contenedor-principal__celula";

//   const celulaIndividual = document.getElementsByClassName(
//     "contenedor-principal__filas"
//   );
//   for (let i = 0; i < celulaIndividual.length; i++) {
//     celulaIndividual[i].appendChild(celula);
//   }
//   celula.addEventListener("click", () => {
//     celula.style.backgroundColor = "transparent";
//   });
// }

let columnas;
let filas;

// const crearTablero = (col, row) => {
//   const primeraTabla = new Array(col);
//   for (let i = 0; i < primeraTabla.length; i++) {
//     primeraTabla[i] = new Array(row);
//     for (let j = 0; j < primeraTabla[i].length; j++) {
//       primeraTabla[i][j] = 0;
//       crearCelulas();
//     }
//     crearFilasDivs();
//   }
//   return console.table(primeraTabla);
// };

const crearTablero = (col, row) => {
  const firstCol = new Array(col);
  const tablero = document.querySelector(".contenedor-principal__tablero");
  for (let i = 0; i < firstCol.length; i++) {
    firstCol[i] = new Array(row);
    let filasDivs = firstCol[i];
    filasDivs = document.createElement("div");
    filasDivs.className = "contenedor-principal__filas";
    for (let j = 0; j < firstCol[i].length; j++) {
      firstCol[i][j] = 0;
      let celulas = firstCol[i][j];
      celulas = document.createElement("div");
      celulas.className = "contenedor-principal__celula";
      celulas.addEventListener("click", () => {
        if (firstCol[i][j] === 0) {
          firstCol[i][j] = 1;
          celulas.style.backgroundColor = "transparent";
        } else if (firstCol[i][j] === 1) {
          firstCol[i][j] = 0;
          celulas.style.backgroundColor = "black";
        }
      });
      filasDivs.appendChild(celulas);
    }
    tablero.appendChild(filasDivs);
  }
  return firstCol;
};

function omitirBotonesTablero() {
  tableroGrande.style.display = "none";
  tableroPequeño.style.display = "none";
  tableroMedio.style.display = "none";
}

tableroPequeño.addEventListener("click", () => {
  columnas = 10;
  filas = 10;
  document.getElementById("contenedor-tablero").style.display = "flex";
  document.getElementById("contenedor-tablero").style.width = "200px";
  document.getElementById("contenedor-tablero").style.height = "200px";
  omitirBotonesTablero();

  crearTablero(columnas, filas);
});

tableroMedio.addEventListener("click", () => {
  columnas = 20;
  filas = 20;
  document.getElementById("contenedor-tablero").style.display = "flex";
  document.getElementById("contenedor-tablero").style.width = "400px";
  document.getElementById("contenedor-tablero").style.height = "400px";
  omitirBotonesTablero();
  crearTablero(columnas, filas);
});

tableroGrande.addEventListener("click", () => {
  columnas = 30;
  filas = 30;
  document.getElementById("contenedor-tablero").style.display = "flex";
  document.getElementById("contenedor-tablero").style.width = "600px";
  document.getElementById("contenedor-tablero").style.height = "600px";
  omitirBotonesTablero();
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

botonEmpezar.addEventListener("click", () => {
  setInterval(() => {
    let tableroFinal = crearTablero(columnas, filas);
    tableroFinal = nuevoTablero(tableroFinal);
    console.table(tableroFinal);
  }, 1000);
});

// // tableroFinal[1][2] = 1;
// // tableroFinal[2][2] = 1;
// // tableroFinal[3][2] = 1;

// setInterval(() => {
//   tableroFinal = nuevoTablero(tableroFinal);
//   console.table(tableroFinal);
// }, 1000);

module.exports = {
  crearTablero,
  contarVecinos,
  nuevoTablero,
};
