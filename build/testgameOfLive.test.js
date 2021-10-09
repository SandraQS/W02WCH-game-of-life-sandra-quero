const { crearTablero } = require("./gameOfLive");

describe("Dada la funcion crearTablero()", () => {
  describe("Cuando le pasamos por parametro 10 y 10", () => {
    test("deberia devolver un array de 10 filas y 10 columnas", () => {
      const columnas = 10;
      const filas = 10;
      const expected = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      // act
      const result = crearTablero(columnas, filas);
      // assert
      expect(result).toEqual(expected);
    });
  });
});
