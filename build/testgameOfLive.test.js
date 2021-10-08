const { crearTablero } = require("./gameOfLive");

describe("En la funcion crearTablero()", () => {
  test("Cuando le pasamos [0, 0, 0, 0, 0], tiene que devolver [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
    const tablero = [];
    const fila = [0, 0, 0, 0, 0];
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    // act
    const result = crearTablero(tablero, fila);
    // assert
    expect(result).toEqual(expected);
  });
});
