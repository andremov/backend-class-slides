---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Pruebas
_class: invert title
class: body-center
header: Semana 11: Pruebas
_header: ""
---

# Pruebas

---

<!--
  _class: body-center align-center
 -->

## Formato de archivos test

Usualmente, se utiliza la nomenclatura
[nombre de lo que se va a probar].test.js

##

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Formato de archivos test

Usualmente, se utiliza la nomenclatura
[nombre de lo que se va a probar].test.js

user.controller.test.js

##

---

## Tipos de pruebas

1. Unitarias
2. Integracion
3. End to end (E2E)

##

---

<!--
  _class: body-center align-center
 -->

## Pruebas unitarias

Prueban las unidades mas pequeñas de un software

##

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas unitarias

Prueban las unidades mas pequeñas de un software

Por ej. funciones

##

---

<!--
  _class: body-center align-center
 -->

## Pruebas de integracion

Prueban varias unidades pequeñas trabajando en conjunto

##

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas de integracion

Prueban varias unidades pequeñas trabajando en conjunto

Por ej., el proceso completo (ruta → controlador → base de datos)

##

---

<!--
  _class: body-center align-center
 -->

## Pruebas end to end

Prueban la aplicacion completa en funcionamiento en un
ambiente similar al de produccion

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas end to end

Prueban la aplicacion completa en funcionamiento en un
ambiente similar al de produccion

Por ej., realizan requests desde el frontend al backend

##

---

<!--
  _class: body-center align-center
 -->

## Recontextualizacion

Las pruebas e2e (end to end) requieren del frontend y el backend.

Por esto, es normal tener dos grupos de e2e distintos.

##

---

## Recontextualizacion de pruebas

1. E2E de aplicacion
2. E2E de backend
3. Integracion
4. Unitarias

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas unitarias

Prueban las unidades mas pequeñas de un software

Por ej. Funciones especificas

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas de integracion

Prueban varias unidades pequeñas trabajando en conjunto

Por ej., dos controladores que interactuan (users → products)

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas E2E de aplicacion

Prueban la aplicacion completa en funcionamiento en un
ambiente similar al de produccion

Por ej., realizan requests desde el frontend al backend

##

---

<!--
  _class: body-center align-center
 -->

<style scoped>
  p:nth-child(4) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Pruebas E2E de backend

Prueban la aplicacion completa en funcionamiento

Por ej., el proceso completo (ruta → controlador → base de datos)

##

---

## Jest

```js
npm install jest
```

##

---

## Realizar un test

```js
test("descripcion del test (breve)", [test function]);
```

##

---

## "Expectativas"

```js
expect(value).toBe(value);
```

##

---

<!--
_class: title
-->

# Caso 1

---

### Agrupar tests

```js
describe("descripcion del grupo (breve)", [group function]);
```

##

---

<!--
_class: title
-->

# Caso 2

---

### Agrupar grupos

```js
describe("descripcion del grupo (breve)", [group function]);
```

##

---

<!--
_class: title
-->

# Caso 3

---

### Manejo de errores y excepciones

```js
expect(() => [function]).toThrow([error, o nada]);
```

##

---

<!--
_class: title
-->

# Caso 4

---

## Otros Matchers

.not
.toEqual
.toBeNull
.toBeUndefined
.toBeDefined
.toBeTruthy
.toBeFalsy
.toBeGreaterThan
.toBeGreaterThanOrEqual
.toBeLessThan
.toBeLessThanOrEqual

##

---

<!--
_class: title
-->

# Caso 5

---

## Montaje y Desmontaje

A veces, las pruebas requieren de recursos o cosas similares.

##

---

## Montaje y Desmontaje

|            |                                      |
| ---------- | ------------------------------------ |
| BeforeEach | Ejecuta antes de cada prueba         |
| AfterEach  | Ejecuta despues de cada prueba       |
| BeforeAll  | Ejecuta antes de todas las pruebas   |
| AfterAll   | Ejecuta despues de todas las pruebas |

##

---

## Montaje y Desmontaje

|            |                                      |
| ---------- | ------------------------------------ |
| BeforeEach | Ejecuta antes de cada prueba         |
| AfterEach  | Ejecuta despues de cada prueba       |
| BeforeAll  | Ejecuta antes de todas las pruebas   |
| AfterAll   | Ejecuta despues de todas las pruebas |

Ejemplos?

---

## Montaje, Desmontaje y Agrupacion

Los montajes y desmontajes toman en cuenta la agrupacion de
pruebas.

##

---

<!--
_class: title
-->

# Caso 6

---

## Funciones Mock

```js
jest.fn([function]);
jest.fn().mockReturnValue([value])
```

##

---

## Funciones Mock y Llamados

```js
expect([mock]).toBeCalled()
expect([mock]).toBeCalledTimes([numero])
expect([mock].mock.calls[0][0]).toBe([param 1]);
expect([mock].mock.calls[0][1]).toBe([param 2]);
expect([mock].mock.results[0].value).toBe([resultado]);
```

##

---

<!--
_class: title
-->

# Caso 7

---

## Funciones Espia

```js
jest
  .spyOn([objeto o clase], [nombre de function])
```

##

---

## Funciones Espia y Mock

```js
jest
  .spyOn([objeto o clase], [nombre de function])
  .mockImplementation([function]);
```

##

---

<!--
_class: title
-->

# Caso 8
