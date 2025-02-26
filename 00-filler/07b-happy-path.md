---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Happy Path
_class: invert title
class: body-center
header: Relleno: Happy Path
_header: ""
---

# Happy Path

:pencil: 2024-03 :heavy_minus_sign: :stopwatch: 7 min.

---

## Como visualizan un algoritmo?

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## Como visualizan un algoritmo?

![img](../assets/filler/happy-path-01.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## Early Return

![img](../assets/filler/happy-path-02.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## "Guard Clause"

![img](../assets/filler/happy-path-03.png)

##

---

<!--
  _class: body-center align-center
-->

## Guard Clause

Un guard es como un early return, pero en la "mitad" de la función.

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## Guard Clause

![img](../assets/filler/happy-path-03.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## "if" Branch

![img](../assets/filler/happy-path-04.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## "if-else" Branch

![img](../assets/filler/happy-path-05.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## Guard Clause 2

![img](../assets/filler/happy-path-06.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## Guard Clause 3

![img](../assets/filler/happy-path-07.png)

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 18%;
    width: 700px;
  }
</style>

## Happy Path

![img](../assets/filler/happy-path-07.png)

Lo que llamamos el "happy path" es el camino verde.

Es cuando todo va bien, todos los datos son correctos y el algoritmo va de inicio a fin de la manera mas directa.

##

---

<style scoped>
  img {
    margin-top: 5%;
    margin-left: 1%;
    width: 1300px;
  }
</style>

## Happy Path

![img](../assets/filler/happy-path-07.png)

##

---

## Happy Path & Fail-fast System

Un sistema "fail-fast" (falla rapido) es un sistema que detiene o cancela la operación en vez de intentar continuar con la operación de manera posiblemente incorrecta.

##

---

## Fail-fast System

"Si algo anda mal, cancela todo."

##

---

## Fail-fast System

Entonces, un sistema con **Early Returns** y **Guard Clauses** es un sistema "Fail-fast".

##

---

## Bouncer Pattern

Patrón de diseño donde se implementan **Early Returns** y **Guard Clauses** para evitar que se realice un proceso de manera incorrecta o datos incorrectos.

##

---

## Bouncer Pattern

Saca su nombre de los "bouncers", el guardia de seguridad presente en las entradas a discotecas o clubs VIP, que solo permite la entrada a cierta gente.

##

---

## Fail-fast System & Bouncer Pattern

Entonces un _fail-fast system_ está usando el _bouncer pattern_.

Comúnmente en backend se utiliza el _bouncer pattern_, se construye un _fail-fast system_.

##
