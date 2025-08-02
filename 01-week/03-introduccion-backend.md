---
theme: ../theme
transition: none
layout: cover
title: Introduccion al Desarrollo Back-End
exportFilename: 03-introduccion-backend
---

# Introduccion al <br>desarrollo back-end

✏️ 2025-03 ➖ ⏱️ 15 min.

---
layout: cover
---

# Que es "back-end"?

---
layout: cover
---

# Back-end es aquello que **no** es front-end.

---
layout: cover
---

# Que es "front-end"?

---
layout: default-y-center
---

## Front-end

::contents::
Se considera "front-end" aquello que manipula el usuario, o el lado de la aplicacion que esta bajo el control del usuario.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Back-end

::contents::
Se considera "back-end" aquello que **NO** manipula el usuario, o el lado de la aplicacion que **NO** esta bajo el control del usuario.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Back-end

::contents::
Para las aplicaciones web,

El front-end es la pagina web.
El back-end es _el resto_.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Back-end

::contents::
Para cualquier aplicacion,

El front-end es la interfaz de usuario (y el programa que lo contiene).
El back-end es _todo lo otro_.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Back-end

::contents::
El front-end tambien es llamado "el cliente", o "client-side".

El back-end tambien es llamado "el servidor", o "server-side".

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Back-end

::contents::
En terminos del modelo MVC:

Vista: Frontend

Modelo: Backend

Controlador: ?

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

::contents::
![image](./assets/rest-api-mvc-model.png)

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

<style>
.slidev-page-12 p:nth-child(2) {
    position: absolute;
    color: black;
    font-weight: bold;
    top: 68%;
    left: 13%;
}
.slidev-page-12 p:nth-child(3) {
    position: absolute;
    color: black;
    font-weight: bold;
    top: 68%;
    left: 51%;
}
.slidev-page-12 p:nth-child(4) {
    position: absolute;
    color: black;
    font-weight: bold;
    top: 68%;
    left: 74%;
}
</style>

::contents::
![image](./assets/rest-api-mvc-model.png)

Front-end / Vista

Controlador

Back-end / Modelo

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

<style>
.slidev-page-13 p:nth-child(2) {
    position: absolute;
    color: black;
    font-weight: bold;
    top: 68%;
    left: 13%;
}
.slidev-page-13 p:nth-child(3) {
    position: absolute;
    color: black;
    font-weight: bold;
    top: 68%;
    left: 54%;
}
</style>

::contents::
![image](./assets/rest-api-mvc-model.png)

Front-end / Vista

Back-end / Controlador + Modelo

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Que es una aplicacion web?

::contents::
Una aplicacion a la que se accede usando un navegador.

Adicionalmente, puede ser una aplicacion desarrollada usando tecnologias tipicamente usadas en desarrollo web.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Historia del Desarrollo Web I

::contents::
1969: Las universidades UCLA y Stanford se conectan usando cable de telefono (ARPANET).

1983: Se cambia el protocolo NCP por TCP/IP.

1986: Se desarrolla el "arbol del internet", conectando varias "redes" a lo largo del mundo para tener una sola gran red.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Historia del Desarrollo Web II

::contents::
1990: Se comienza a programar la "web".

1991: Primer "navegador" web (solo texto)

1993: Primer navegador web con texto y graficos en linea.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Historia del Desarrollo Web III

::contents::
1993: Primera programacion web por lado de servidor.

1995: Nace PHP

1995: Nace Apache

1995: Nace MySQL

Luego entonces, nace LAMP stack.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Que es una **stack**?

::contents::
Una **stack**, o **tech stack**, es el conjunto de tecnologias primarias utilizadas en una aplicacion, sea web o no.

El termino viene de la idea de que las tecnologias estan "stacked", una encima de la otra. _Como una hamburguesa._

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Que es **LAMP stack**?

::contents::
Un servidor con Linux de OS.

Corriendo Apache como software servidor.

Guardando datos con MySQL.

Recibiendo y respondiendo peticiones con PHP/Perl/Python.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: default-y-center
---

## Que es LAMP stack?

::contents::
**L**inux de OS.

**A**pache como software servidor.

**M**ySQL de base de datos.

**P**HP, **P**erl o **P**ython en el servidor.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

1995: Nace JavaScript.

::header::
Semana 1: Introduccion al curso

::footer::
{{ $page }} / {{ $nav.total }}

---
layout: cover
---

<style>
.slidev-page-22 img {
    position: absolute;
    top: 5%;
    left: 0%;
    z-index: -1;
    opacity: 20%;
}
</style>

![](./assets/flame-dog.png)

# 1995: Nace JavaScript.
