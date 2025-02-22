---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Mejor Codigo
_class: invert title
class: body-center
header: Relleno: Mejor Codigo
_header: ""
---

# Mejor Codigo

:pencil: 2025-01 :heavy_minus_sign: :stopwatch: 5 min.

---

## Mejor Codigo

**Pregunta 1:**
Para cualquier función o funcionalidad que se quiera desarrollar, hay una sola implementación que es mejor que todas?

##

---

## Mejor Codigo

**Pregunta 2:**
Que hace que una implementación de codigo sea mejor que otra?

##

---

<style scoped>
  code {
    width: 45%;
    display: inline-block;
  }
</style>

## Ejemplo #1

```js
function f(n) {
  let a = [];
  for (let i = 2; i <= n; i++) {
    let p = 1;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) p = 0;
    }
    if (p) a.push(i);
  }
  return a;
}
```

```js
function findPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
```

##

---
