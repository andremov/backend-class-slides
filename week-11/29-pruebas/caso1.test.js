function suma(a, b) {
  return a + b;
}

test("suma 2 numeros enteros positivos", () => {
  const resultado = suma(2, 3);

  expect(resultado).toBe(5);
});
