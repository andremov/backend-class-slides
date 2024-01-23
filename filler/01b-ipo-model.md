---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: IPO Model
_class: invert title
class: body-center
header: Relleno: IPO Model
_header: ""
---

 <style>
    .star {
      color: rgba(220, 140, 60, 1);
    }
 </style>

# IPO Model

---

<!--
_class: title
 -->

O, en español,

# Modelo EPS

---

## Que es EPS?

ENTIDAD PROMOTORA DE SALUD - EPS
Entidades responsables de la afiliación y registro de los afiliados al sistema de la regularidad social en Colombia.

##

---

<!--
_class: body-center align-center
 -->

## Que es el IPO Model?

Es un patron reconocido para el diseño y desarrollo de algoritmos.

##

---

## IPO significa...

INPUT
PROCESS
OUTPUT

##

---

## EPS significa...

ENTRADA
PROCESO
SALIDA

##

---

## Es decir,

Para desarrollar un algoritmo que solucione un problema (pequeño),

Paso 1: Obtener los datos necesarios (input)
Paso 2: Procesar o modificar los datos (process)
Paso 3: Devolver un resultado (output)

##

---

## Ejemplo

```js
function suma(a, b) {
  const operando1 = a;
  const operando2 = b;

  const resultado = operando1 + operando2;

  return resultado;
}
```

##

---

## Ejemplo

```js
function suma(a, b) {
  // input
  const operando1 = a;
  const operando2 = b;

  // process
  const resultado = operando1 + operando2;

  // output
  return resultado;
}
```

##

---

## Ejemplo

```js
function suma(a, b) {
  // input
  // const operando1 = a;
  // const operando2 = b;

  // process
  const resultado = a + b;

  // output
  return resultado;
}
```

##

---

## Ejemplo

```js
function suma(a, b) {
  // input
  // const operando1 = a;
  // const operando2 = b;

  // process
  // const resultado = a + b;

  // output
  return a + b;
}
```

##

---

## Problema

Dada una lista de estudiantes y su nota final, cuantos estudiantes sacaron la mayor nota, que no es necesariamente la nota maxima posible (5)?

##

---

## Problema

```js
function suma(estudiantes) {
  // input
  .
  .

  // process
  .
  .
  .

  // output
  .
}
```

##

---

## Problema

```js
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  .
  .
  .

  // output
  .
}
```

##

---

## Problema

```js
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  .
}
```

##

---

## Problema

```js
function suma(estudiantes) {
  // input
  const notasFinales = estudiantes.map((estudiante) => estudiante.notaFinal);
  const mayorNota = Math.max(...notasFinales);

  // process
  const estudiantesConMayorNota = estudiantes.filter(
    (estudiante) => estudiante.notaFinal === mayorNota
  );

  // output
  return estudiantesConMayorNota.length;
}
```

##
