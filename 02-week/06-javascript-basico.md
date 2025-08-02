---
title: Javascript Basico
theme: ../theme
transition: none
layout: cover
exportFilename: 06-javascript-basico
---

# Javascript Básico

✏️ 2025-01 ➖ ⏱️ 15 min.

---
layout: default-y-center
---

## Comentarios

::contents::
```js
// una linea

/*
muchas
lineas
*/
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Declaración

::contents::
```js

let variable1;

const variable2;

```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-center
---

## Punto y coma

::contents::
Es opcional.

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Inicialización

::contents::
```js
variable1 = 1;
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Declaración e Inicialización

::contents::
```js
let variable1 = 1;

const variable2 = 1;
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Tipos

::contents::
```js
let variable1 = 1;
console.log(typeof variable1); // "number"

let variable2 = "1";
console.log(typeof variable2); // "string"
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Sencillo

::contents::
```js
const horasEnDia = 24;

let horasDurmiendo = 8;

horasEnDia = horasEnDia - horasDurmiendo; // ?
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Sencillo

::contents::
```js
const horasEnDia = 24;

let horasDurmiendo = 8;

horasEnDia = horasEnDia - horasDurmiendo; // ⚠️
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Asignación & Operación

::contents::
```js
let horasEnDia = 24;

let horasDurmiendo = 8;

horasEnDia = horasEnDia - horasDurmiendo; // 16
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Asignación & Operación

::contents::
| Operador | Ejemplo   | Traducción   |
| -------- | --------- | ------------ |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## "Debugging"

::contents::
```js
let hoursInDay = 24;
let hoursSleeping = 8;

console.log(hoursInDay - hoursSleeping); // 16

hoursInDay -= hoursSleeping;

console.log(hoursInDay); // 16
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Strings

::contents::
```js
let nombre = "Andres";
let apellido = "Movilla";

console.log(nombre + apellido); // ?
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Strings

::contents::
```js
let nombre = "Andres";
let apellido = "Movilla";

console.log(nombre + apellido); // "AndresMovilla"
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Strings

::contents::
```js
let nombre = "Andres";
let apellido = "Movilla";

console.log(nombre + " " + apellido); // "Andres Movilla"
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Strings

::contents::
```js
let F = "Formula";
let uno = 1;

console.log(F + uno); // ?
console.log(uno + F); // ?
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Strings

::contents::
```js
let F = "Formula";
let uno = 1;

console.log(F + uno); // "Formula1"
console.log(uno + F); // ?
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Strings

::contents::
```js
let F = "Formula";
let uno = 1;

console.log(F + uno); // "Formula1"
console.log(uno + F); // "1Formula"
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: cover
---

# Funciones

---
layout: default-y-center
---

## Funciones

::contents::
Una función es una variable.

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(1, 2)); // 3
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Declarar Funciones

::contents::
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

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: cover
---

# Condicionales y Ciclos

---
layout: default-y-center
---

## Sintaxis If

::contents::
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

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Sintaxis If

::contents::
Que dice este codigo?

```js
let cedula = 114284195;

if (cedula == "114284195") {
  console.log("Acceso permitido.");
} else {
  console.log("Acceso denegado.");
}
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Sintaxis If

::contents::
Dice **acceso permitido**.

```js{4}
let cedula = 114284195;

if (cedula == "114284195") {
  console.log("Acceso permitido."); // ✅
} else {
  console.log("Acceso denegado.");
}
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Operaciones Comparativas

::contents::
| Operador | Significado                    |
| -------- | ------------------------------ |
| ==       | Valor igual                    |
| ===      | Valor igual y tipo igual       |
| !=       | Valor no igual                 |
| !==      | Valor no igual o tipo no igual |

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Operaciones Comparativas

::contents::
| Operador | Significado         |
| -------- | ------------------- |
| >        | Valor mayor         |
| <        | Valor menor         |
| >=       | Valor mayor o igual |
| <=       | Valor menor o igual |

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Sintaxis If

::contents::
```js{2,4}
let cedula = 1140879129;
let accesoPermitido = cedula === 1140879129;

if (accesoPermitido) {
  console.log("Acceso permitido."); // ✅
} else {
  console.log("Acceso denegado.");
}
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Sintaxis For

::contents::
```js
const maxFactorial = 5;
let factorial = 1;

for (let i = 1; i <= maxFactorial; i++) {
  factorial *= i;
}

console.log(factorial); // 120
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: default-y-center
---

## Sintaxis While

::contents::
```js
const acelerando = true;
let distanciaRecorrida = 0;

while (acelerando) {
  distanciaRecorrida++;
}
```

::header::
Semana 2: Javascript Basico

::footer::
{{ $page }} / {{ $nav.total }}


---
layout: cover
---

# 🎉

# Hora del Taller 1!
