function suma(a, b) {
  if (!a || !b) {
    throw new Error("Falta un factor");
  }

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

  describe("manejo de errores", () => {
    test("falta un factor", () => {
      expect(() => suma(2)).toThrow();
    });

    test("faltan dos factores", () => {
      expect(() => suma()).toThrow();
    });

    test("un factor indefinido, un factor falta", () => {
      expect(() => suma(undefined)).toThrow();
    });

    test("un factor indefinido, un factor definido", () => {
      expect(() => suma(undefined, 2)).toThrow();
    });

    test("un factor definido, un factor indefinido", () => {
      expect(() => suma(2, undefined)).toThrow();
    });

    test("un factor nulo, un factor definido", () => {
      expect(() => suma(null, 2)).toThrow();
    });

    test("un factor definido, un factor nulo", () => {
      expect(() => suma(2, null)).toThrow();
    });
  });

  test("misterio", () => {
    const resultado = suma(2, 0);

    expect(resultado).toBe(2);
  });
});
