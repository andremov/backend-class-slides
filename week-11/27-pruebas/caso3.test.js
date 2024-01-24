function suma(a, b) {
  return a + b;
}

describe("funcion suma", () => {
  describe("numeros enteros", () => {
    test("enteros positivos", () => {
      const resultado = suma(2, 3);

      expect(resultado).toBe(5);
    });

    test("enteros negativos", () => {
      const resultado = suma(-2, -3);

      expect(resultado).toBe(-5);
    });

    test("enteros + y -", () => {
      const resultado = suma(2, -3);

      expect(resultado).toBe(-1);
    });
  });

  describe("numeros decimales", () => {
    test("decimales positivos", () => {
      const resultado = suma(2.1, 3.5);

      expect(resultado).toBe(5.6);
    });

    test("decimales negativos", () => {
      const resultado = suma(-2.1, -3.3);

      expect(resultado).toBe(-5.4);
    });

    test("decimal + y -", () => {
      const resultado = suma(2.2, -3.2);

      expect(resultado).toBe(-1);
    });
  });
});
