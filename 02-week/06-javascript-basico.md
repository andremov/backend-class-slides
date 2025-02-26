---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Javascript Basico
_class: invert title
header: Semana 2: Javascript Basico
_header: ""
math: mathjax
---

# Javascript Básico

:pencil: 2025-01 :heavy_minus_sign: :stopwatch: 15 min.

---

<!--
_class: body-center
 -->

## Comentarios

```js
// una linea

/*
muchas
lineas
*/
```

##

---

<!--
_class: body-center
 -->

## Declaración

```js

let variable1;

const variable2;

```

##

---

<!--
_class: body-center align-center
 -->

## Punto y coma

Es opcional.

##

---

<!--
_class: body-center
 -->

## Inicialización

```js
variable1 = 1;
```

##

---

<!--
_class: body-center
 -->

## Declaración e Inicialización

```js
let variable1 = 1;

const variable2 = 1;
```

##

---

<!--
_class: body-center
 -->

## Tipos

```js
let variable1 = 1;
console.log(typeof variable1); // "number"

let variable2 = "1";
console.log(typeof variable2); // "string"
```

##

---

<!--
_class: body-center
 -->

## Sencillo

```js
const horasEnDia = 24;

let horasDurmiendo = 8;

horasEnDia = horasEnDia - horasDurmiendo; // ?
```

##

---

<!--
_class: body-center
 -->

## Sencillo

```js
const horasEnDia = 24;

let horasDurmiendo = 8;

horasEnDia = horasEnDia - horasDurmiendo; // ⚠️
```

##

---

<!--
_class: body-center
 -->

## Asignacion & Operacion

```js
let horasEnDia = 24;

let horasDurmiendo = 8;

horasEnDia = horasEnDia - horasDurmiendo; // 16
```

##

---

<!--
_class: body-center align-center
 -->

## Asignacion & Operacion

| Operador | Ejemplo   | Traduccion   |
| -------- | --------- | ------------ |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

##

---

<!--
_class: body-center
 -->

## "Debugging"

```js
let hoursInDay = 24;
let hoursSleeping = 8;

console.log(hoursInDay - hoursSleeping); // 16

hoursInDay -= hoursSleeping;

console.log(hoursInDay); // 16
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let nombre = "Andres";
let apellido = "Movilla";

console.log(nombre + apellido); // ?
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let nombre = "Andres";
let apellido = "Movilla";

console.log(nombre + apellido); // "AndresMovilla"
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let nombre = "Andres";
let apellido = "Movilla";

console.log(nombre + " " + apellido); // "Andres Movilla"
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let F = "Formula";
let uno = 1;

console.log(F + uno); // ?
console.log(uno + F); // ?
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let F = "Formula";
let uno = 1;

console.log(F + uno); // "Formula1"
console.log(uno + F); // ?
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let F = "Formula";
let uno = 1;

console.log(F + uno); // "Formula1"
console.log(uno + F); // "1Formula"
```

##

---

<!--
_class: title
 -->

## Funciones

---

<!--
_class: body-center
 -->

## Funciones

Una funcion es una variable.

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(1, 2)); // 3
```

##

---

<!--
_class: body-center
 -->

## Declarar Funciones

```js
function suma1(a, b) {
  return a + b;
}

const suma2 = function (a, b) {
  return a + b;
};

const suma3 = (a, b) => {
  return a + b;
};
```

##

---

<!--
_class: title
 -->

## Condicionales y Ciclos

---

<!--
_class: body-center
 -->

## Sintaxis If

```js
let variableNoSospechosa = 19;

if (variableNoSospechosa > 18) {
  console.log("Todo bien");
} else if (variableNoSospechosa == 18) {
  console.log("Ojo ahi manito");
} else {
  console.log("Epa, como asi?");
}
```

##

---

<!--
_class: body-center
 -->

## Sintaxis If

Que dice este codigo?

```js
let cedula = 114284195;

if (cedula == "114284195") {
  console.log("Acceso permitido.");
} else {
  console.log("Acceso denegado.");
}
```

##

---

<!--
_class: body-center
 -->

## Sintaxis If

Dice **acceso permitido**.

```js
let cedula = 114284195;

if (cedula == "114284195") {
  console.log("Acceso permitido."); // ✅
} else {
  console.log("Acceso denegado.");
}
```

##

##

---

<!--
_class: body-center align-center
 -->

## Operaciones Comparativas

| Operador | Significado                    |
| -------- | ------------------------------ |
| ==       | Valor igual                    |
| ===      | Valor igual y tipo igual       |
| !=       | Valor no igual                 |
| !==      | Valor no igual o tipo no igual |

##

---

<!--
_class: body-center align-center
 -->

## Operaciones Comparativas

| Operador | Significado         |
| -------- | ------------------- |
| >        | Valor mayor         |
| <        | Valor menor         |
| >=       | Valor mayor o igual |
| <=       | Valor menor o igual |

##

---

<!--
_class: body-center
 -->

## Sintaxis If

```js
let cedula = 1140879129;
let accesoPermitido = cedula === 1140879129;

if (accesoPermitido) {
  console.log("Acceso permitido."); // ✅
} else {
  console.log("Acceso denegado.");
}
```

##

---

<!--
_class: body-center
 -->

## Sintaxis For

```js
const maxFactorial = 5;
let factorial = 1;

for (let i = 1; i <= maxFactorial; i++) {
  factorial *= i;
}

console.log(factorial); // 120
```

##

---

<!--
_class: body-center
 -->

## Sintaxis While

```js
const acelerando = true;
let distanciaRecorrida = 0;

while (acelerando) {
  distanciaRecorrida++;
}
```

##

---

<!--
_class: title
 -->

# :tada:

# Hora del Taller 1!
