function randomIntInRange(min, max) {
  if (!min || !max) {
    return null;
  }

  return min + Math.random() * (max - min);
}

test("el num aleatorio es definido", () => {
  const min = 10;
  const max = 15;

  const respuesta = randomIntInRange(min, max);

  expect(respuesta).toBeDefined();
});

test("el num aleatorio es mayor al minimo", () => {
  const min = 10;
  const max = 15;

  const respuesta = randomIntInRange(min, max);

  expect(respuesta).toBeGreaterThanOrEqual(min);
});

test("el num aleatorio es menor al maximo", () => {
  const min = 10;
  const max = 15;

  const respuesta = randomIntInRange(min, max);

  expect(respuesta).toBe(0);
});

test("el num aleatorio es nulo sin rango", () => {
  const respuesta = randomIntInRange();

  expect(respuesta).toBeNull();
});

const mercado = ["leche", "pan", "harina", "azucar"];

test("la lista de mercado tiene los productos correctos", () => {
  expect(mercado).toContain("pan");

  expect(mercado).not.toContain("chocoramo");
});

test("asignacion a un objeto", () => {
  const data = { one: 1 };

  data["two"] = 2;

  expect(data).toBe({ one: 1, two: 2 });
  expect(data).toEqual({ one: 1, two: 2 });
});
