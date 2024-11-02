function pruebaObjetos(object, param) {
  if (!object) {
    throw new Error("Missing object");
  }

  if (!param) {
    throw new Error("Missing param");
  }

  return Object.keys(object).includes(param);
}

describe("funcion pruebaObjetos", () => {
  test("prueba que se llame object.keys", () => {
    const mockFn = jest.spyOn(Object, "keys");
    const object = { valor1: 10, valor2: 20 };

    pruebaObjetos(object, "valor1");

    expect(mockFn).toHaveBeenCalled();
  });

  test("prueba que se llame object.keys con el object", () => {
    const mockFn = jest.spyOn(Object, "keys");
    const object = { valor1: 10, valor2: 20 };

    pruebaObjetos(object, "valor1");

    expect(mockFn.mock.calls[0][0]).toEqual(object);
  });

  //TODO: prueba que el object sea dado
  //TODO: prueba que el param sea dado
  //TODO: prueba que el param no este en el objeto
});
