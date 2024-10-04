---
marp: true
theme: work-theme
title: Taller 04
_class: title
class: body-center
header: Taller 04
---

<style>
    p:nth-child(4) {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(var(--text-color), 0.6);
    }
</style>

# Taller 04

## Desarollo Web Backend

Cree una **carpeta** llamada taller-04, realice los siguientes puntos, y súbalo a su repositorio de talleres.

:pencil: 2024-03

---

## Punto 1

Desarrolle un endpoint en la ruta **/users/hobby** que retorne los usuarios que cuenten con el hobby enviado.

##

---

## Punto 2

Desarrolle un endpoint en la ruta **/users/exists** que retorne si el usuario con el id enviado existe.

##

---

## Punto 3

Desarrolle un endpoint en la ruta **/users/team-experience** que retorne la experiencia total del equipo de pilotos enviado.

##

---

## Punto 4

Desarrolle un endpoint en la ruta **/users/by-faction** que retorne los pilotos de la facción enviada.

##

---

## Punto 5

Desarrolle un endpoint en la ruta **/users** que realice el registro de un usuario nuevo a la "base de datos". La "base de datos" es el array.

```js
// DATOS:
const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];
```

##

---

## Rubrica Taller

| Criterio                                    | Puntos |
| ------------------------------------------- | ------ |
| La carpeta esta nombrado incorrectamente.   | -1     |
| El proyecto no compila.                     | -1     |
| La implementación no sigue la arquitectura. | -1     |
| Puntos.                                     | 5      |
| Total                                       | 5 (-3) |

##
