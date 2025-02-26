---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Supertest
_class: invert title
class: body-center
header: Semana 11: Supertest
_header: ""
---

# Supertest

:pencil: 2024-03 :heavy_minus_sign: :stopwatch: 10 min.

---

<!--
_class: body-center align-center
 -->

## Pruebas

Previamente, hemos hablado de pruebas usando jest.

##

---

## Pruebas

```js
function suma(a, b) {
  return a + b;
}

test("suma 2 numeros enteros positivos", () => {
  const resultado = suma(2, 3);

  expect(resultado).toBe(5);
});
```

##

---

<!--
_class: body-center align-center
 -->

## Pruebas

Pero eso es para funciones, que pasa si queremos probar
rutas/endpoints?

##

---

## Ejemplo

```js
const request = require('supertest');
const express = require('express');
const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

test('supertest', async () => {
  await request(app)
    .get('/user’)
    .expect(200)
})
```

---

## Ejemplo

```js
const request = require("supertest");
const express = require("express");
const app = express();

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

test("supertest", async () => {
  const response = await request(app).get("/user");

  expect(response.status).toBe(200);
});
```

---

## Ejemplo (POST)

```js
const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', function(req, res) {
  res.status(200).json(req.body);
});

test('supertest', async () => {
  const test_body = {name: 'john'}
  const { status, \_body: body } = await request(app)
    .post('/user')
    .send(test_body)
    .set('Accept', 'application/json’)

  expect(status).toBe(200)
  expect(body).toBeDefined()
  expect(body).toStrictEqual(test_body)
})
```

---

<!--
_class: body-center align-center
 -->

## Como probamos una ruta?

|       |     |      |     |                    |
| ----- | --- | ---- | --- | ------------------ |
| Front | ->  | Ruta | ->  | Metodo controlador |

##

---

<!--
_class: body-center align-center
 -->

## Como probamos una ruta?

| Envía       | Ruta | Recibe      |
| ----------- | ---- | ----------- |
| Front       | Ruta | Controlador |
| _Supertest_ | Ruta | Controlador |

##

---

<!--
_class: body-center align-center
 -->

## Como probamos una ruta?

| Envía       | Ruta | Recibe      |
| ----------- | ---- | ----------- |
| Front       | Ruta | Controlador |
| _Supertest_ | Ruta | _Mock_      |

##

---

## Que querríamos probar de una ruta?

1. Depende

##

---

## Que querríamos probar de una ruta?

#1. Los datos enviados a la ruta sean “limpiados” apropiadamente para el controlador

##

##

---

## Que querríamos probar de una ruta?

#1. Los datos enviados a la ruta sean “limpiados” apropiadamente para el controlador

B. Las validaciones previas de los datos enviados están funcionando correctamente

##

---

## Que querríamos probar de una ruta?

#1. Los datos enviados a la ruta sean “limpiados” apropiadamente para el controlador

B. Las validaciones previas de los datos enviados están funcionando correctamente

III. El proceso completo está funcionando correctamente (ruta -> controlador -> ruta de nuevo)
