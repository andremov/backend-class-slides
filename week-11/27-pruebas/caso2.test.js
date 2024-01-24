function suma(a, b) {
  return a + b;
}

describe("funcion suma", () => {
  test("suma 2 numeros enteros positivos", () => {
    const resultado = suma(2, 3);

    expect(resultado).toBe(5);
  });

  test("suma 2 numeros enteros negativos", () => {
    const resultado = suma(-2, -3);

    expect(resultado).toBe(-5);
  });

  test("suma 2 numeros enteros, + y -", () => {
    const resultado = suma(2, -3);

    expect(resultado).toBe(-1);
  });
});
