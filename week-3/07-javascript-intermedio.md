---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Javascript Intermedio
_class: invert title
header: Semana 3: Javascript Intermedio
_header: ""
---

# Javascript Intermedio

---

<!--
_class: body-center
 -->

## Operador Y (and)

```js
const meQuieroIr = true;
const mePuedoIr = true;

if (meQuieroIr && mePuedoIr) {
console.log(“Me voy”);
}
```

##

---

<!--
_class: body-center
 -->

## Operador O (or)

```js
const meQuieroIr = true;
const mePuedoIr = true;

if (meQuieroIr || mePuedoIr) {
console.log(“Me voy”);
}
```

##

---

<!--
_class: body-center
 -->

## Conversion a number

```js
const numberString = "123.15";

console.log(numberString); // "123"
console.log(parseInt(numberString)); // 123
console.log(parseFloat(numberString)); // 123.15
console.log(+numberString); // 123.15
```

##

---

<!--
_class: body-center
 -->

## Conversion a number

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

Truthy es cualquier valor que es considerado **true**, cuando interpretado como booleano.

Falsy es cualquier valor que es considerado **false**, cuando interpretado como booleano.

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

Son falsy los siguientes valores:

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
    } else if (number % 2 !=== 0) {
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
  return number % 2 === 0;
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
  return !(number % 2);
}
```

##
