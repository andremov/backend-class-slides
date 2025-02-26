function emergencia(valorActual, valorMinimo, valorMaximo, funcionEmergencia) {
  if (valorActual < valorMinimo) {
    funcionEmergencia("menor");
  }

  if (valorActual > valorMaximo) {
    funcionEmergencia("mayor");
  }
}

describe("funcion emergencia", () => {
  test("prueba que se llame la funcion emergencia", () => {
    const mockFn = jest.fn();

    emergencia(10, 20, 30, mockFn);

    expect(mockFn).toHaveBeenCalled();
  });

  test("prueba que se llame la funcion emergencia", () => {
    const mockFn = jest.fn();

    emergencia(19, 20, 30, mockFn);

    expect(mockFn.mock.calls[0][0]).toBe("menor");
  });

  test("prueba que se llame la funcion emergencia", () => {
    const mockFn = jest.fn();

    emergencia(31, 20, 30, mockFn);

    expect(mockFn.mock.calls[0][0]).toBe("mayor");
  });
});
