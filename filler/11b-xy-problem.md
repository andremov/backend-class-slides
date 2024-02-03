---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: XY problem
_class: invert title
class: body-center
header: Relleno: XY problem
_header: ""
---

# XY problem

---

## XY Problem

El problema XY es cuando una persona tiene un problema, se le ocurrió una solución, y pide ayuda para completar esa solución en vez de para resolver el problema inicial.

"Porque quieres resolver (Y), si para resolver (X) puedes hacer esto?"

##

---

## XY Problem

Si estabas resolviendo algo, y terminaste borrando todo y con una solución mucho mas corta, seguramente estabas viviendo un XY problem.

##

---

## XY Problem

1. Sepan que existe.
2. Si van a pedir ayuda, comienza con _porque_ estás haciendo lo que estás haciendo.
3. Si te piden ayuda, pregunta _porque_ están haciendo lo que están haciendo.

##

---

## El Tipico Ejemplo

> **Alejandro:** Como saco los ultimos 3 caracteres de una string?
>
> **Paola:** Le puedes hacer [str].slice(-3).
>
> **Alejandro:** Listo, gracias!

##

---

## Resultado

```js
function getFileExtension(filename) {
  return filename.slice(-3);
}
```

##

---

## Resultado

```js
function getFileExtension(filename) {
  return filename.slice(-3);
}
```

Cual es el problema X?
Cual es el problema Y?

##

---

## Resultado

```js
function getFileExtension(filename) {
  return filename.slice(-3);
}
```

Que inconvenientes trae esta implementación?

##

---

## Mejor solución?

```js
function getFileExtension(filename) {
  return filename.split(".").pop();
}
```

##
