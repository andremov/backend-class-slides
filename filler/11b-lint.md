---
marp: true
theme: slides-theme
paginate: true
_paginate: skip
title: Lint
_class: invert title
class: body-center
header: Relleno: Lint
_header: ""
---

# Lint

Y Prettier e Intellisense

---

## Intellisense

---

<!--
_class: body-center align-center
 -->

## Intellisense

Intellisense es el nombre dado al sistema de autocompletado de
Visual Studio (y Visual Studio Code)

##

---

<!--
_class: body-center align-center
 -->

## Intellisense

En VSCode, el Intellisense de JS y TS viene incluido.

##

---

<!--
_class: body-center align-center
 -->

## Intellisense

Intellisense es lo que permite el autocompletado de cosas como
nombres de metodos.

![img](../assets/filler/intellisense-preview.png)

##

---

<!--
_class: body-center align-center
 -->

## Intellisense

Informacion de parametros.

![img](../assets/filler/intellisense-preview-02.png)

##

---

<!--
_class: body-center align-center
 -->

## Intellisense

Los packages usualmente tienen sus “tipos” para ayudar a Intellisense.

A veces los tipos vienen por separado.

##

---

<!--
_class: body-center align-center
 -->

## Lint

Lint era una programa para detectar pequeños errores en C.

##

---

<!--
_class: body-center align-center
 -->

## Lint

Hoy en dia, muchas funcionalidades de Lint las trae el mismo
compilador, o el IDE.

Muchas veces esto se dice que el IDE tiene un Linter.

##

---

<style scoped>
  li:not(:nth-child(1)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

##

---

<style scoped>
  li:not(:nth-child(2)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

##

---

<style scoped>
  li:not(:nth-child(3)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

##

---

<style scoped>
  li:not(:nth-child(4)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

---

<style scoped>
  li:not(:nth-child(5)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

---

<style scoped>
  li:not(:nth-child(6)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

---

<style scoped>
  li:not(:nth-child(7)) {
    color: rgba(var(--text-color), 0.6);
  }
</style>

## Lint

Que te ayuda a detectar un Linter?

- Errores de sintaxis
- Uso de variables no declaradas
- Llamado a funciones deprecadas
- Convenciones de espaciado y formato
- Uso incorrecto de alcance
- Sobreflujo en switch
- Uso de utilidades peligrosas del lenguaje

---

<!--
_class: body-center align-center
 -->

## Lint

![img](../assets/filler/lint-01.png)

---

<!--
_class: body-center align-center
 -->

## Lint

![img](../assets/filler/lint-02.png)

---

<!--
_class: body-center align-center
 -->

## Lint

![img](../assets/filler/lint-03.png)

---

## Lint

En Javascript,
usamos el package **eslint** para las funcionalidades de lint adicionales que queremos.

##

---

## Lint

Eslint nos permite tener el archivo de configuracion, y tambien el "auto fix"

##

---

<!--
_class: body-center align-center
 -->

## Lint

Lint es solo tan poderoso como se lo permitan.

##

---

<!--
_class: body-center align-center
 -->

## Prettier

Cada programador es distinto.

##

---

<style scoped>
  table, th, td, thead, tr {
border: none;
outline: none;
background: rgba(var(--bg-color),1);
  }
</style>

## Prettier

| Estan los desarrolladores que ponen las llaves<br/> en la misma linea del if, | Y los desarrolladores que estan equivocados. |
| ----------------------------------------------------------------------------- | -------------------------------------------- |
| ![img](../assets/filler/prettier-01.png)                                      | ![img](../assets/filler/prettier-02.png)     |

---

<style scoped>
  table, th, td, thead, tr {
border: none;
outline: none;
background: rgba(var(--bg-color),1);
overflow-y: hidden;
  }
</style>

## Prettier

| Estan los desarrolladores que usan tabulacion, | Y los desarrolladores que estan equivocados. |
| ---------------------------------------------- | -------------------------------------------- |
| ![img](../assets/filler/prettier-04.png)       | ![img](../assets/filler/prettier-03.png)     |

---

<!--
_class: body-center align-center
 -->

## Prettier

_Ley de la Trivialidad_

##

---

<!--
_class: body-center align-center
 -->

## Prettier

_Ley de la Trivialidad_

"people within an organization commonly or typically give
disproportionate weight to trivial issues."

##

---

<!--
_class: body-center align-center
 -->

## Prettier

_Ley de la Trivialidad_

"en una organizacion, tipicamente, se le da peso desproporcionado a trivialidades"

##

---

## Prettier

- Ponemos los punto y coma, o no?
- Tabs o espacios?
- Comas despues del ultimo element en un array, o no?
- CamelCase o snake_case?
- Comillas simples, o dobles?
- Ponemos espacio entre los items de un array, o no?

##

---

<!--
_class: body-center align-center
 -->

## Prettier

Prettier tambien se configura con su archivo de configuracion, y su
respective package.

##
