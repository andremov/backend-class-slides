---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Javascript Intermedio
_class: invert title
header: Semana 2: Javascript Intermedio
_header: ""
---

# Javascript Intermedio

:pencil: 2024-03 :heavy_minus_sign: :stopwatch: 0 min.

---

<!--
_class: body-center
 -->

## Operador Y (and)

```js
const meQuieroIr = true;
const mePuedoIr = true;

if (meQuieroIr && mePuedoIr) {
  console.log("Me voy");
} else {
  console.log("Me quedo");
}
```

##

---

<!--
_class: body-center
 -->

## Operador O (or)

```js
const meQuieroIr = false;
const mePuedoIr = true;

if (meQuieroIr || mePuedoIr) {
  console.log("Me voy");
} else {
  console.log("Me quedo");
}
```

##

---

<!--
_class: body-center
 -->

## Conversión a number

```js
const numberString = "123.15";

console.log(numberString); // "123.15"
console.log(parseInt(numberString)); // 123
console.log(parseFloat(numberString)); // 123.15
console.log(+numberString); // 123.15

// Todos los 3 son de tipo "number".
```

##

---

<!--
_class: body-center
 -->

## Conversión a number

```js
const booleanString = true;

console.log(booleanString); // true
console.log(+booleanString); // 1
```

##

---

<!--
_class: body-center
 -->

## Number como boolean

```js
const conditional = 1;

if (conditional) {
  console.log("Exito");
}
```

##

---

<!--
_class: body-center
 -->

## Truthy & Falsy

**Truthy** es cualquier valor que es considerado **true**, cuando interpretado como booleano.

**Falsy** es cualquier valor que es considerado **false**, cuando interpretado como booleano.

##

---

<!--
_class: body-center align-center
 -->

## Truthy

Todo valor es truthy, a menos que sea falsy.

##

---

<style scoped>
  li {
    margin: 0;
  }
</style>

## Falsy

Los siguientes valores son falsy:

- false
- 0 ó -0
- 0n ó -0n _(0 como BigInt)_
- "" _(Una string vacia)_
- null
- undefined
- NaN _(Not a Number)_
- document.all _(Deprecado)_

##

---

<!--
_class: body-center
 -->

## Operador 'No'

```js
const conditional = true;

if (!conditional) {
  console.log("Exito");
}
```

##

---

<!--
_class: body-center
 -->

## Operador 'No'

```js
const conditional = true;

if (!!conditional) {
  console.log("Exito");
}
```

##

---

<!--
_class: body-center
 -->

## Operador 'No'

```js
const conditional = true;

if (!!!conditional) {
  console.log("Exito");
}
```

##

---

<!--
_class: body-center
 -->

## Operador 'No'

```js
const conditional = 1;

if (!conditional) {
  console.log("Exito");
}
```

##

---

<!--
_class: body-center
 -->

## Operador 'No'

```js
const conditional = 1;

if (!!conditional) {
  console.log("Exito");
}
```

##

---

<!--
_class: body-center
 -->

## Brevedad & Funciones

```js
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else if (number % 2 === 1) {
    return false;
  }
}
```

##

---

<!--
_class: body-center
 -->

## Brevedad & Funciones

```js
function isEven(number) {
  // number % 2 es 1 ó 0
  // si es 0, el numero es par
  // si es 1, el numero es impar
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}
```

##

---

<!--
_class: body-center
 -->

## Brevedad & Funciones

```js
function isEven(number) {
  // el valor que se retorna es *lo opuesto*
  // del condicional del if, aprovechemos
  if (number % 2) {
    return !(number % 2);
  } else {
    return true;
  }
}
```

##

---

<!--
_class: body-center
 -->

## Brevedad & Funciones

```js
function isEven(number) {
  // tambien en el else
  if (number % 2) {
    return !(number % 2);
  } else {
    return !(number % 2);
  }
}
```

##

---

<!--
_class: body-center
 -->

## Brevedad & Funciones

```js
function isEven(number) {
  // entonces el if sobra...
  return !(number % 2);
}
```

##

---

<!--
_class: body-center
 -->

## Brevedad & Funciones

```js
function isEven(number) {
  // alternativamente...
  return number % 2 === 0;
}
```

##
