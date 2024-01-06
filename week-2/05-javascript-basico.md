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

# Javascript Basico

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

## Declaracion

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

## Inicializacion

```js
variable1 = 1;
```

##

---

<!--
_class: body-center
 -->

## Declaracion e Inicializacion

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
typeof variable1; // "number"

let variable2 = "1";
typeof variable2; // "string"
```

##

---

<!--
_class: body-center
 -->

## Sencillo

```js
const hoursInDay = 24;

let hoursSleeping = 8;

hoursInDay = hoursInDay - hoursSleeping;
```

##

---

<!--
_class: body-center
 -->

## Asignacion & Operacion

```js
let hoursInDay = 24;

let hoursSleeping = 8;

hoursInDay = hoursInDay - hoursSleeping;
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
| \_=      | x \_= y   | x = x \* y   |
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
let firstName = "Andres";
let lastName = "Movilla";

console.log(firstName + lastName); // "AndresMovilla"
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let firstName = "Andres";
let lastName = "Movilla";

console.log(firstName + " " + lastName); // "Andres Movilla"
```

##

---

<!--
_class: body-center
 -->

## Strings

```js
let F = "Formula";
let one = 1;

console.log(F + one); // "Formula1"
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

```js
let cedula = 114284195;

if (cedula == "114284195") {
  console.log("Acceso permitido.");
}
```

##

---

<!--
_class: body-center
 -->

## Sintaxis If

```js
let cedula = 114284195;

if (cedula === "114284195") {
  console.log("Acceso permitido.");
}
```

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
    console.log(“Acceso permitido.”);
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

## Funciones

---

<!--
_class: body-center
 -->

## Funciones

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(a, b)); // 3
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
_class: body-center align-center
 -->

<style scoped>
    p:nth-child(6) {
        text-align: center;
        color: rgba(var(--text-color), 0.5);
        position: absolute;
        bottom: 5%;
        width: 100%;
        left: 0;
    }
</style>

## Taller 1: Ejercicio 1

Desarrolle una función llamada **resolvedor** que **retorne** el valor de x de la formula general cuadratica (negativa o positiva, **no ambas**).

Utilicen la pagina https://jsfiddle.net/ para programar en JS sin entorno local.

$$ x_1 = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

¿ Que es una raiz, si no es a^(1/2) ?
a=1, b=5, c=4 => -1 o -4

##

---

<!--
_class: body-center
 -->

## Objetos

```js
const perro = {
  raza: "Labrador",
  edad: 4,
  nombre: "Tequila",
  muerde: false,
  juzga: true,
};

console.log(perro.nombre); // “Tequila”
console.log(perro["muerde"]); // false
```

##

---

<!--
_class: body-center
 -->

## Objetos

```js
const perro = {
  raza: "Labrador",
  edad: 4,
  nombre: "Tequila",
  muerde: false,
  juzga: true,
};
const campo = "juzga";

console.log(perro[campo]); // true
```

##

---

<!--
_class: body-center
 -->

## Objetos

```js
const perro = {
  raza: "Labrador",
  edad: 4,
  nombre: "Tequila",
  muerde: false,
  juzga: true,
};

perro.nombre = "Whiskey";
perro["muerde"] = true;

console.log(perro.nombre); // Whiskey
console.log(perro.muerde); // true
```

##

---

<!--
_class: body-center
 -->

## Vectores / Arrays

```js
const estudiantes = [
  {
    nombre: "Martin Elias",
    velocidad: 9001,
  },
  {
    nombre: "Diomedes",
    numHijos: 9002,
  },
];
```

##

---

<!--
_class: body-center
 -->

## Vectores / Arrays

```js
console.log(estudiantes[0].velocidad); // 9001

console.log(estudiantes[“1”].numHijos); // 9002
```

##

---

<!--
_class: title
 -->

## Ejercicios

---

<!--
_class: body-center align-center
 -->

## Taller 1 Ejercicio 2

Implementar, de la mejor manera posible, una función que retorne la paridad de un número.

##

---

<!--
_class: body-center align-center
 -->

## Taller 1 Ejercicio 3

Implementar, de la peor manera posible, la misma función.

##

---

<!--
_class: body-center align-center
 -->

<style scoped>
 p {
  padding: 0 7rem;
 }
</style>

## Taller 1 Ejercicio 4

Implementar una función que, al recibir un número n, retorne un vector 1..n, reemplazando:

Todo numero divisible por 3 con “Fizz”.
Todo numero disible por 5 con “Buzz”
O “FizzBuzz” si aplican ambos.

##
